#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double beta_neg_binomial_lpmf(int n, double r, double alpha, double beta) {
    return stan::math::beta_neg_binomial_lpmf(n, r, alpha, beta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("beta_neg_binomial_lpmf", &beta_neg_binomial_lpmf);
}
