isdefined(Base, :__precompile__) && __precompile__(false)

module RiskAdjustedLinearizations

import Base: show, getindex
import DiffEqBase: get_tmp
using ArrayInterface, FastGaussQuadrature, ForwardDiff, LinearAlgebra, Printf, SparseArrays# , SparseDiffTools, SparsityDetection
using UnPack
using BandedMatrices: Ones, Zeros
using DiffEqBase: DiffCache, dualcache
using NLsolve: nlsolve, OnceDifferentiable

# Utilities
include("util.jl") # in principle, several of these utility functions could work for other packages

# RiskAdjustedLinearization
include("cache_types.jl")
include("risk_adjusted_linearization.jl")

# Numerical Algorithms
include("numerical_algorithms/compute_psi.jl")
include("numerical_algorithms/blanchard_kahn.jl")
include("numerical_algorithms/relaxation.jl")
include("numerical_algorithms/homotopy.jl")
include("numerical_algorithms/solve.jl")

# Simulations and Simulation-based Diagnostics
include("simulation/simulate.jl")
include("simulation/impulse_responses.jl")
include("simulation/gausshermite_expectation.jl")
include("simulation/euler_equation_error.jl")

export RiskAdjustedLinearization, update!, nonlinear_system, linearized_system, solve!,
    simulate, impulse_responses, gausshermite_expectation, euler_equation_error,
    dynamic_euler_equation_error
end # module
