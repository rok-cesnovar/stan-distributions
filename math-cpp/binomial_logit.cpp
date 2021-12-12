#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double binomial_logit_lpmf(int n, int N, double theta) {
    return stan::math::binomial_logit_lpmf(n, N, theta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("binomial_logit_lpmf", &binomial_logit_lpmf);
}