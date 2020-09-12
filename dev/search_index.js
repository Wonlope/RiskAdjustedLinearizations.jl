var documenterSearchIndex = {"docs":
[{"location":"risk_adjusted_linearization/#risk-adjusted-linearization-1","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"","category":"section"},{"location":"risk_adjusted_linearization/#Theory-1","page":"Risk-Adjusted Linearizations","title":"Theory","text":"","category":"section"},{"location":"risk_adjusted_linearization/#Nonlinear-Model-1","page":"Risk-Adjusted Linearizations","title":"Nonlinear Model","text":"","category":"section"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"Most dynamic economic models can be formulated as the system of nonlinear equations","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"``math \\begin{aligned}     z{t + 1} & = \\mu(zt, yt) + \\Lambda(zt)(y{t + 1} - \\mathbb{E}t y{t + 1}) + \\Sigma(zt) \\varepsilon{t + 1},\\\\\n    0 & = \\log\\mathbb{E}t[\\exp(\\xi(zt, yt) + \\Gamma5 z{t + 1} + \\Gamma6 y{t + 1})]. \\end{aligned} ``","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"The vectors z_tin mathbbR^n_z and y_t in mathbbR^n_y are the state and jump variables, respectively. The first vector equation comprise the model's expectational equations, which are typically the first-order conditions for the jump variables from agents' optimization problem. The second vector equation comprise the transition equations of the state variables. The exogenous shocks varepsiloninmathbbR^n_varepsilon form a martingale difference sequence whose distribution is described by the differentiable, conditional cumulant generating function (ccgf)","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"math beginaligned kappaalpha(z_t) mid z_t = logmathbbE_texp(alpha(z_t) varepsilon_t + 1)quad text for any differentiable map alphamathbbR^n_zrightarrowmathbbR^n_varepsilon endaligned","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"The functions ``math \\begin{aligned} \\xi:\\mathbb{R}^{2ny + 2nz}\\rightarrow \\mathbb{R}^{ny},& \\quad \\mu:\\mathbb{R}^{ny + nz}\\rightarrow \\mathbb{R}^{nz},\\\\\n\\Lambda::\\mathbb{R}^{nz} \\rightarrow \\mathbb{R}^{nz \\times ny}, & \\quad \\Sigma::\\mathbb{R}^{nz}\\ \\rightarrow \\mathbb{R}^{nz\\times n\\varepsilon} \\end{aligned} are differentiable. The first two functions characterize the effects of time t variables on the expectational and state transition equations. The function Lambda characterizes heteroskedastic endogenous risk that depends on innovations in jump variables while the function Sigma characterizes exogenous risk.","category":"page"},{"location":"risk_adjusted_linearization/#Risk-Adjusted-Linearizations-by-Affine-Approximation-1","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations by Affine Approximation","text":"","category":"section"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"Many economic models are typically solved by perturbation around the deterministic steady state. To break certainty equivalence so that asset pricing is meaningful, these perturbations need to be at least third order. However, even third-order perturbations can poorly approximate the true global solution. A key problem is that the economy may not spend much time near the deterministic steady state, so a perturbation around this point will be inaccurate.","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"Instead of perturbing the model's nonlinear equations around the deterministic steady state, we could perturb around the stochastic or \"risky\" steady state. This point is better for a perturbation because the economy will spend a large amount of time near the stochastic steady state. Lopez et al. (2018) show that an affine approximation of the model's nonlinear equation is equivalent to a linearization around the stochastic steady state. Further, they confirm that in practice this \"risk-adjusted\" linearization well approximate global solutions of canonical economic models and outperforms perturbations around the deterministic steady state.","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"The affine approximation of an dynamic economic model is ``math \\begin{aligned}     \\mathbb{E}[z{t + 1}] & = \\mu(z, y) + \\Gamma1(zt - z) + \\Gamma2(yt - y)\\\\\n    0                      & = \\xi(z, y) + \\Gamma3(zt - z) + \\Gamma4(yt - y) + \\Gamma5 \\mathbb{E}t z{t + 1} + \\Gamma6 \\mathbb{E}t y{t + 1} + \\mathscr{V}(z) + J\\mathscr{V}(z)(zt  - z), \\end{aligned} ``","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"where Gamma_1 Gamma_2 are the Jacobians of mu with respect to z_t and y_t, respectively; Gamma_3 Gamma_4 are the Jacobians of xi with respect to z_t and y_t, respectively; Gamma_5 Gamma_6 are constant matrices; mathscrV(z) is the model's entropy; JmathscrV(z) is the Jacobian of the entropy; JmathscrV(z) is the Jacobian of the entropy;","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"and the state variables z_t and jump variables y_t follow ``math \\begin{aligned}     z{t + 1} & = z + \\Gamma1(zt - z) + \\Gamma2(yt - y) + (I{nz} - \\Lambda(zt) \\Psi)^{-1}\\Sigma(zt)\\varepsilon{t + 1},\\\\\n    yt       & = y + \\Psi(zt - z) \\end{aligned} ``","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"The unknowns (z y Psi) solve the system of equations ``math \\begin{aligned} 0 & = \\mu(z, y) - z,\\\\\n0 & = \\xi(z, y) + \\Gamma5 z + \\Gamma6 y + \\mathscr{V}(z),\\\\\n0 & = \\Gamma3 + \\Gamma4 \\Psi + (\\Gamma5 + \\Gamma6 \\Psi)(\\Gamma1 + \\Gamma2 \\Psi) + J\\mathscr{V}(z). \\end{aligned} ``","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"Refer to Lopez et al. (2018) \"Risk-Adjusted Linearizations of Dynamic Equilibrium Models\" for more details about the theory justifying this approximation approach.","category":"page"},{"location":"risk_adjusted_linearization/#Implementation:-RiskAdjustedLinearization-1","page":"Risk-Adjusted Linearizations","title":"Implementation: RiskAdjustedLinearization","text":"","category":"section"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"We implement risk-adjusted linearizations of nonlinear dynamic economic models through the wrapper type RiskAdjustedLinearization. The user only needs to define the functions and matrices characterizing the equilibrium of the nonlinear model. Once these functions are defined, the user can create a RiskAdjustedLinearization object, which will automatically create the Jacobian functions needed to compute the affine approximation.","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"To ensure efficiency in speed and memory, this package takes advantage of a number of features that are easily accessible through Julia.","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"The Jacobians are calculated using forward-mode automatic differentiation","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"rather than symbolic differentiation.","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"The Jacobian functions are constructed to be in-place with pre-allocated caches.\nFunctions provided by the user will be converted into in-place functions with pre-allocated caches.\n(Coming in the future) Calculation of Jacobians with automatic differentiation is accelereated","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"by exploiting sparsity with SparseDiffTools.jl","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"See the Example for how to use the type.","category":"page"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"@docs\nRiskAdjustedLinearizations.RiskAdjustedLinearization","category":"page"},{"location":"risk_adjusted_linearization/#Helper-Types-1","page":"Risk-Adjusted Linearizations","title":"Helper Types","text":"","category":"section"},{"location":"risk_adjusted_linearization/#","page":"Risk-Adjusted Linearizations","title":"Risk-Adjusted Linearizations","text":"TBD","category":"page"},{"location":"numerical_algorithms/#numerical-algorithms-1","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"","category":"section"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"n To calculate the risk-adjusted linearization, we need to solve a system of nonlinear equations. These equations are generally solvable using Newton-type methods. The package currently has two available algorithms, relaxation and homotopy continuation","category":"page"},{"location":"numerical_algorithms/#solve!-1","page":"Numerical Algorithms","title":"solve!","text":"","category":"section"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"The primary interface for calculating a risk-adjusted linearization once a RiskAdjustedLinearization object is created is the function solve!. The user selects the desired numerical algorithm through algorithm keyword of solve!.","category":"page"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"All of the available algorithms need to solve a system of nonlinear equations. We use nlsolve for this purpose, and all keyword arguments for nlsolve can be passed as keyword arguments to solve!, e.g. autodiff and ftol.","category":"page"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"RiskAdjustedLinearizations.solve!","category":"page"},{"location":"numerical_algorithms/#relaxation-1","page":"Numerical Algorithms","title":"Relaxation","text":"","category":"section"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"The first and default numerical algorithm is a relaxation algorithm. The key problem in solving the equations characterizing (z y Psi) is that it is difficult to jointly solve the nonlinear matrix equation for Psi along with the steady-state equations for z and y due to the presence of the entropy term. The relaxation algorithm splits the solution of these equations into two steps, which allows us to calculate guesses of Psi using linear algebra. It is in this sense that this iterative algorithm is a relaxation algorithm.","category":"page"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"The system of equations characterizing the coefficients (z y Psi) are solved iteratively in two separate steps. Given previous guesses (z_n - 1 y_n - 1 Psi_n - 1), we calculate (z_n y_n) such that","category":"page"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"``math \\begin{aligned} 0 & = \\mu(zn, yn) - zn,\\\\\n0 & = \\xi(zn, yn) + \\Gamma5 zn + \\Gamma6 yn + \\mathscr{V}(z{n - 1}),\\\\\n\\end{aligned} ``","category":"page"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"is satisfied. In other words, we hold the entropy term constant and update (z_n y_n) in the remaining terms. The coefficients are solved efficiently through nlsolve with (z_n - 1 y_n - 1) as initial guesses.","category":"page"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"Then we compute Psi_n by solving","category":"page"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"math beginaligned 0  = Gamma_3 + Gamma_4 Psi_n + (Gamma_5 + Gamma_6 Psi_n)(Gamma_1 + Gamma_2 Psi_n) + JmathscrV(z_n - 1) endaligned","category":"page"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"with a Generalized Schur decomposition (also known as QZ decomposition). Notice that we also hold the Jacobian of the entropy constant. Only after we have a new round of (z_n y_n Psi_n) do we update the entropy-related terms.","category":"page"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"Convergence is achieved once (z_n y_n Psi_n) are sufficiently close under some norm. By default, we use the L^infty norm (maximum absolute error).","category":"page"},{"location":"numerical_algorithms/#homotopy-continuation-1","page":"Numerical Algorithms","title":"Homotopy Continuation","text":"","category":"section"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"When the deterministic steady state exists, it is typically an easy problem to solve numerically. We can therefore use the equations characterizing the deterministic steady state for a homotopy continuation method. Let q be the embedding parameter. Then the homotopy continuation method iteratively solves","category":"page"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"``math \\begin{aligned} 0 & = \\mu(z, y) - z,\\\\\n0 & = \\xi(z, y) + \\Gamma5 z + \\Gamma6 y + q \\mathscr{V}(z),\\\\\n0 & = \\Gamma3 + \\Gamma4 \\Psi + (\\Gamma5 + \\Gamma6 \\Psi)(\\Gamma1 + \\Gamma2 \\Psi) + q J\\mathscr{V}(z) \\end{aligned} ``","category":"page"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"for the coefficients (z_q y_q Psi_q) by increasing q from 0 to 1.","category":"page"},{"location":"numerical_algorithms/#blanchard-kahn-1","page":"Numerical Algorithms","title":"Blanchard-Kahn Conditions","text":"","category":"section"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"At the end of solve!, we check the stochastic steady state found is locally unique and saddle-path stable by checking what are known as the Blanchard-Kahn conditions. Standard references for computational macroeconomics explain what these conditions are, so we defer to them (e.g. Blanchard-Kahn (1980), Klein (2000), and Sims (2002)). For the stochastic steady state, these conditions are essentially identical to the conditions for the deterministic steady state, but the Jacobian of the expectational equations to z_t also includes the Jacobian of the entropy. In the deterministic steady state, the entropy is zero, hence the Jacobian of the entropy is zero. In the stochastic steady state, the entropy is no longer zero and varies with z_t, hence the Jacobian of the expectational equations to z_t depends on entropy.","category":"page"},{"location":"numerical_algorithms/#Docstrings-1","page":"Numerical Algorithms","title":"Docstrings","text":"","category":"section"},{"location":"numerical_algorithms/#","page":"Numerical Algorithms","title":"Numerical Algorithms","text":"RiskAdjustedLinearizations.relaxation!\nRiskAdjustedLinearizations.homotopy!\nRiskAdjustedLinearizations.blanchard_kahn","category":"page"},{"location":"#Home-1","page":"Home","title":"RiskAdjustedLinearizations.jl Documentation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package provides a user-friendly API for efficiently calculating risk-adjusted linearizations of dynamic economic models. These linearizations are equivalent to first-order perturbations around the stochastic steady state and are solved by computing affine approximations.","category":"page"},{"location":"#License-1","page":"Home","title":"License","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This content is released under the MIT License.","category":"page"},{"location":"#Contents-1","page":"Home","title":"Contents","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"tips/#tips-1","page":"Tips","title":"Tips","text":"","category":"section"},{"location":"tips/#","page":"Tips","title":"Tips","text":"This page of the documentation holds miscellaneous tips for using the package.","category":"page"},{"location":"tips/#Writing-functions-compatible-with-automatic-differentiation-1","page":"Tips","title":"Writing functions compatible with automatic differentiation","text":"","category":"section"},{"location":"tips/#","page":"Tips","title":"Tips","text":"Use an in-place function to avoid type errors. For example, define the ccgf as ccgf(F, x). You can use the element type of F via eltype(F) to ensure that you don't get a type error from using Float64 instead of Dual inside the function. If ccgf was out-of-place, then depending on how the vector being returned is coded, you may get a type error if elements of the return vector are zero or constant numbers. By having F available, you can guarantee these numbers can be converted to Dual types if needed without always declaring them as Dual types.\nUse dualvector or dualarray. The package provides these two helper functions in the case where you have a function f(x, y), and you need to be able to automatcally differentiate with respect to x and y separately. For example, the nonlinear terms of the expectational equation ξ(z, y) takes this form. Within , you can pre-allocate the return vector by calling F = RiskAdjustedLinearizations.dualvector(z, y). The dualvector function will infer from z and y whether F should be have Dual element types or not so you can repeatedly avoid writing if-else conditional blocks. The dualarray function generalizes this to arbitrary AbstractMatrix inputs. See the out-of-place function for ξ in examples/wachterdisasterrisk/wachter.jl.\nDon't pre-allocate the return vector. Instead of pre-allocating the return vector at the  top of the function for an out-of-place function, just concatenate the individual elements  at the very end. Julia will figure out the appropriate element type for you. The downside of this  approach is that you won't be able to assign names to the specific indices of the return vector (e.g.  does this equation define the risk-free interest rate?). For small models, this disadvantage is generally not a problem.  See the definition of the out-of-place expected state transition function μ in examples/wachterdisasterrisk/wachter.jl.","category":"page"},{"location":"example/#example-1","page":"Example","title":"Example","text":"","category":"section"},{"location":"example/#","page":"Example","title":"Example","text":"This example shows how to calculate the risk-adjusted linearization of the discrete-time version of the Wachter (2013) model with disaster-risk. You can run this example using the script examples/wachterdisasterrisk/example_wachter.jl. For the equivalent code in MATLAB provided by Lopez et al., see here.","category":"page"},{"location":"example/#Create-a-RiskAdjustedLinearization-1","page":"Example","title":"Create a RiskAdjustedLinearization","text":"","category":"section"},{"location":"example/#Define-Nonlinear-System-1","page":"Example","title":"Define Nonlinear System","text":"","category":"section"},{"location":"example/#","page":"Example","title":"Example","text":"The user generally needs to define","category":"page"},{"location":"example/#","page":"Example","title":"Example","text":"mu: expected state transition function\nxi nonlinear terms of the expectational equations\nccgf: conditional cumulant generating function of the exogenous shocks\nLambda: function or matrix mapping endogenous risk into state transition equations\nSigma: function or matrix mapping exogenous risk into state transition equations\nGamma_5`: coefficient matrix on one-period ahead expectation of state variables\nGamma_6: coefficient matrix on one-period ahead expectation of jump variables\n","category":"page"},{"location":"example/#","page":"Example","title":"Example","text":"The quantities mu, xi, and ccgf are always functions. The quantities Lambda and Sigma can either be functions or matrices. For example, in endowment economies like Wachter (2013), Lambda is the zero matrix since there is no endogenous risk. In other applications, Sigma may not be state-dependent and thus a constant matrix. The last two quantities Gamma_5 and Gamma_6 are always matrices.","category":"page"},{"location":"example/#","page":"Example","title":"Example","text":"In addition, you need to define initial guesses for the coefficients z, y, Ψ and specify the number of exogenous shocks Nε. The initial guesses can be undefined if you don't want to use actual numbers yet, but you will eventually need to provide guesses in order for the nonlinear solvers to work in the numerical algorithms.","category":"page"},{"location":"example/#Instantiate-the-object-1","page":"Example","title":"Instantiate the object","text":"","category":"section"},{"location":"example/#","page":"Example","title":"Example","text":"Once you have the required quantities, simply call","category":"page"},{"location":"example/#","page":"Example","title":"Example","text":"ral = RiskAdjustedLinearization(μ, Λ, Σ, ξ, Γ₅, Γ₆, ccgf, z, y, Ψ, Nε)","category":"page"},{"location":"example/#Example-1","page":"Example","title":"Example","text":"","category":"section"},{"location":"example/#","page":"Example","title":"Example","text":"The following code presents a function that defines the desired functions and matrices, given the parameters for the model in Wachter (2013), and returns a RiskAdjustedLinearization object. The code is from this script examples/wachterdisasterrisk/wachter.jl, which has examples for both in-place and out-of-place functions.","category":"page"},{"location":"example/#","page":"Example","title":"Example","text":"function inplace_wachter_disaster_risk(m::WachterDisasterRisk{T}) where {T <: Real}\n    @unpack μₐ, σₐ, ν, δ, ρₚ, pp, ϕₚ, ρ, γ, β = m\n\n    @assert ρ != 1. # Forcing ρ to be non-unit for this example\n\n    S  = OrderedDict{Symbol, Int}(:p => 1,  :εc => 2, :εξ => 3) # State variables\n    J  = OrderedDict{Symbol, Int}(:vc => 1, :xc => 2, :rf => 3) # Jump variables\n    SH = OrderedDict{Symbol, Int}(:εₚ => 1, :εc => 2, :εξ => 3) # Exogenous shocks\n    Nz = length(S)\n    Ny = length(J)\n    Nε = length(SH)\n\n    function μ(F, z, y)\n        F_type    = eltype(F)\n        F[S[:p]]  = (1 - ρₚ) * pp + ρₚ * z[S[:p]]\n        F[S[:εc]] = zero(F_type)\n        F[S[:εξ]] = zero(F_type)\n    end\n\n    function ξ(F, z, y)\n        F[J[:vc]] = log(β) - γ * μₐ + γ * ν * z[S[:p]] - (ρ - γ) * y[J[:xc]] + y[J[:rf]]\n        F[J[:xc]] = log(1. - β + β * exp((1. - ρ) * y[J[:xc]])) - (1. - ρ) * y[J[:vc]]\n        F[J[:rf]] = (1. - γ) * (μₐ - ν * z[S[:p]] - y[J[:xc]])\n    end\n\n    Λ = zeros(T, Nz, Ny)\n\n    function Σ(F, z)\n        F_type = eltype(F)\n        F[SH[:εₚ], SH[:εₚ]] = sqrt(z[S[:p]]) * ϕₚ * σₐ\n        F[SH[:εc], SH[:εc]] = one(F_type)\n        F[SH[:εξ], SH[:εξ]] = one(F_type)\n    end\n\n    function ccgf(F, α, z)\n        F .= .5 .* α[:, 1].^2 + .5 * α[:, 2].^2 + (exp.(α[:, 3] + α[:, 3].^2 .* δ^2 ./ 2.) .- 1. - α[:, 3]) * z[S[:p]]\n    end\n\n    Γ₅ = zeros(T, Ny, Nz)\n    Γ₅[J[:vc], S[:εc]] = (-γ * σₐ)\n    Γ₅[J[:vc], S[:εξ]] = (γ * ν)\n    Γ₅[J[:rf], S[:εc]] = (1. - γ) * σₐ\n    Γ₅[J[:rf], S[:εξ]] = -(1. - γ) * ν\n\n    Γ₆ = zeros(T, Ny, Ny)\n    Γ₆[J[:vc], J[:vc]] = (ρ - γ)\n    Γ₆[J[:rf], J[:vc]] = (1. - γ)\n\n    z = [pp, 0., 0.]\n    xc_sss = log((1. - β) / (exp((1. - ρ) * (ν * pp - μₐ)) - β)) / (1. - ρ)\n    vc_sss = xc_sss + ν * pp - μₐ\n    y = [vc_sss, xc_sss, -log(β) + γ * (μₐ - ν * pp) - (ρ - γ) * (vc_sss - xc_sss)]\n    Ψ = zeros(T, Ny, Nz)\n    return RiskAdjustedLinearization(μ, Λ, Σ, ξ, Γ₅, Γ₆, ccgf, z, y, Ψ, Nε)\nend","category":"page"},{"location":"example/#Solve-using-a-Newton-type-Numerical-Algorithm-1","page":"Example","title":"Solve using a Newton-type Numerical Algorithm","text":"","category":"section"},{"location":"example/#","page":"Example","title":"Example","text":"To solve the model using the relaxation algorithm, just call","category":"page"},{"location":"example/#","page":"Example","title":"Example","text":"solve!(ral; algorithm = :relaxation)","category":"page"},{"location":"example/#","page":"Example","title":"Example","text":"This form of solve! uses the coefficients in ral as initial guesses. To specify other initial guesses, call","category":"page"},{"location":"example/#","page":"Example","title":"Example","text":"solve!(ral, z0, y0, Ψ0; algorithm = :relaxation)","category":"page"},{"location":"example/#","page":"Example","title":"Example","text":"If you don't have a guess for Psi, then you can just provide guesses for z and y:","category":"page"},{"location":"example/#","page":"Example","title":"Example","text":"solve!(ral, z0, y0; algorithm = :relaxation)","category":"page"},{"location":"example/#","page":"Example","title":"Example","text":"In this case, we calculate the deterministic steady state first using z and y; back out the implied Psi; and then proceed with the relaxation algorithm using the deterministic steady state as the initial guess.","category":"page"}]
}
