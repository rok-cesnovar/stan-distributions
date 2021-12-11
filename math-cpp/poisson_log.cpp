#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double poisson_log_lpmf(int n, double lambda) {
    return stan::math::poisson_log_lpmf(n, lambda);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("poisson_log_lpmf", &poisson_log_lpmf);
}