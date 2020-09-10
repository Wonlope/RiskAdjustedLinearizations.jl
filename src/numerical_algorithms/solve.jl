"""
```
solve!(m; method = :relaxation, kwargs...)
solve!(m, z0, y0; method = :relaxation, verbose = :high, kwargs...)
solve!(m, z0, y0, Ψ0; method = :relaxation, verbose = :high, kwargs...)
```

computes the risk-adjusted linearization of the dynamic economic model
described by `m` and updates `m` with the solution,
e.g. the coefficients ``(z, y, \\Psi)``.

The three available `solve!` methods are slight variations on each other.

- Method 1: uses the `z`, `y`, and `Ψ` fields of `m` as initial guesses
    for ``(z, y, \\Psi)`` and proceeds with the numerical algorithm
    specified by `method`

- Method 2: uses `z0` and `y0` as initial guesses for the deterministic
    steady state, which is then used as the initial guess for ``(z, Y, \\Psi)``
    for the numerical algorithm specified by `method`.

- Method 3: uses `z0`, `y0`, and `Ψ0` as initial guesses for ``(z, Y, \\Psi)``
    and proceeds with the numerical algorithm specified by `method`.

### Inputs
- `m::RiskAdjustedLinearization`: object holding functions needed to calculate
    the risk-adjusted linearization
- `z0::AbstractVector{S1}`: initial guess for ``z``
- `y0::AbstractVector{S1}`: initial guess for ``y``
- `Ψ0::AbstractVector{S1}`: initial guess for ``\\Psi``
- `S1 <: Real`

### Keywords
The `method::Symbol` keyword can be one of `[:deterministic, :relaxation, :homotopy]`.

For the keywords relevant to specific methods, see the docstring for the underlying method being called.
Note these methods are not exported.

- `:relaxation` -> `relaxation!`
- `:homotopy` -> `homotopy!`
- `:deterministic` -> `deterministic_steadystate!`
"""
function solve!(m::RiskAdjustedLinearization; method::Symbol = :relaxation, kwargs...)
    if method == :deterministic
        solve!(m, m.z, m.y; method = method, verbose = verbose, kwargs...)
    else
        solve!(m, m.z, m.y, m.Ψ; method = method, verbose = verbose, kwargs...)
    end
end

function solve!(m::RiskAdjustedLinearization, z0::AbstractVector{S1}, y0::AbstractVector{S1};
                method::Symbol = :relaxation, kwargs...) where {S1 <: Real}

    @assert method in [:deterministic, :relaxation, :homotopy]

    # Deterministic steady state
    deterministic_steadystate!(m, vcat(z0, y0); ftol = ftol, autodiff = autodiff, kwargs...)

    # Calculate linearization
    nl = nonlinear_system(m)
    li = linearized_system(m)
    update!(nl, m.z, m.y, m.Ψ, li.Γ₅, li.Γ₆;
            select = Symbol[:μ, :ξ])
    update!(li, m.z, m.y, m.Ψ, nl.μ_sss, nl.ξ_sss, nl.𝒱_sss;
            select = Symbol[:Γ₁, :Γ₂, :Γ₃, :Γ₄])

    # Back out Ψ
    compute_Ψ(m; zero_entropy_jacobian = true)

    # Use deterministic steady state as guess for stochastic steady state?
    if method == :deterministic
        # Zero the entropy and Jacobian terms so they are not undefined or something else
        m.nonlinear.𝒱_sss  .= 0.
        m.linearization.JV .= 0.
    else
        solve!(m, m.z, m.y, m.Ψ; method = method, ftol = ftol, autodiff = autodiff,
               verbose = verbose, kwargs...)
    end

    # Check Blanchard-Kahn
    blanchard_kahn(m; verbose = verbose)

    m
end

function solve!(m::RiskAdjustedLinearization, z0::AbstractVector{S1}, y0::AbstractVector{S1}, Ψ0::AbstractMatrix{S1};
                method::Symbol = :relaxation, kwargs...) where {S1 <: Number}

    @assert method in [:relaxation, :homotopy]

    # Stochastic steady state
    if method == :relaxation
        N_zy = m.Nz + m.Ny
        relaxation!(m, vcat(z0, y0), Ψ0; ftol = ftol, autodiff = autodiff,
                    verbose = verbose, kwargs...)
    elseif method == :homotopy
        homotopy!(m, vcat(z0, y0, vec(Ψ0)); ftol = ftol, autodiff = autodiff,
                  verbose = verbose, kwargs...)
    end

    # Check Blanchard-Kahn
    blanchard_kahn(m; verbose = verbose)

    m
end

"""
```
function deterministic_steadystate!(m, x0; ftol = 1e-8, autodiff = :central,
                                    verbose = :none, kwargs...)
```

calculates the deterministic steady state.

### Types:
- `S1 <: Number`
- `S2 <: Real`

### Inputs
- `m::RiskAdjustedLinearization`: object holding functions needed to calculate
    the risk-adjusted linearization
- `x0::AbstractVector{S1}`: initial guess for ``(z, y)``

### Keywords
- `ftol::S2`: convergence tolerance of residual norm for `nlsolve`
- `autodiff::Symbol`: either `:forward` or `:central`
- `verbose::Symbol`: verbosity of information printed out during solution.
    If `:low` or `:high`, a print statement occurs when a steady state is solved.
"""
function deterministic_steadystate!(m::RiskAdjustedLinearization, x0::AbstractVector{S1};
                                    ftol::S2 = 1e-8, autodiff::Symbol = :central,
                                    verbose::Symbol = :none, kwargs...) where {S1 <: Real, S2 <: Real}

    # Set up system of equations
    _my_eqn = function _my_deterministic_equations(F, x)
        # Unpack
        z = @view x[1:m.Nz]
        y = @view x[(m.Nz + 1):end]

        # Update μ(z, y) and ξ(z, y)
        update!(m.nonlinear, z, y, m.Ψ, m.linearization.Γ₅, m.linearization.Γ₆; select = Symbol[:μ, :ξ])

        # Calculate residuals
        F[1:m.Nz] = m.nonlinear.μ_sss  - z
        F[(m.Nz + 1):end] = m.nonlinear.ξ_sss + m.linearization.Γ₅ * z + m.linearization.Γ₆ * y
    end

    out = nlsolve(_my_eqn, x0, ftol = ftol, autodiff = autodiff, kwargs...)

    if out.f_converged
        m.z .= out.zero[1:m.Nz]
        m.y .= out.zero[(m.Nz + 1):end]

        if verbose in [:low, :high]
            println("A deterministic steady state has been found")
        end
    else
        error("A deterministic steady state could not be found.")
    end
end
