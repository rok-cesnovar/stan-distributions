#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double bernoulli_logit_lpmf(int n, double alpha) {
    return stan::math::bernoulli_logit_lpmf(n, alpha);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("bernoulli_logit_lpmf", &bernoulli_logit_lpmf);
}
