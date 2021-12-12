#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double discrete_range_lpmf(int y, int l, int u) {
    return stan::math::discrete_range_lpmf(y, l, u);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("discrete_range_lpmf", &discrete_range_lpmf);
}