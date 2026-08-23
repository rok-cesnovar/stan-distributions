#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double yule_simon_lpmf(int n, double alpha) {
    return stan::math::yule_simon_lpmf(n, alpha);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("yule_simon_lpmf", &yule_simon_lpmf);
}
