#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double poisson_lpmf(int n, double alpha) {
    return stan::math::poisson_lpmf(n, alpha);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("poisson_lpmf", &poisson_lpmf);
}