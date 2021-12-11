#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double neg_binomial_lpmf(int n, double alpha, double beta) {
    return stan::math::neg_binomial_lpmf(n, alpha, beta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("neg_binomial_lpmf", &neg_binomial_lpmf);
}