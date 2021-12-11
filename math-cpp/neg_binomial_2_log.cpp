#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double neg_binomial_2_log_lpmf(int n, double eta, double phi) {
    return stan::math::neg_binomial_2_log_lpmf(n, eta, phi);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("neg_binomial_2_log_lpmf", &neg_binomial_2_log_lpmf);
}