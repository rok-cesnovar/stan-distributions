#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double beta_binomial_lpmf(int n, int N, double alpha, double beta) {
    return stan::math::beta_binomial_lpmf(n, N, alpha, beta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("beta_binomial_lpmf", &beta_binomial_lpmf);
}