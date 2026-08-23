#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double bernoulli_lpmf(int n, double theta) {
    return stan::math::bernoulli_lpmf(n, theta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("bernoulli_lpmf", &bernoulli_lpmf);
}
