#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double std_normal_lpdf(double y) {
    return stan::math::std_normal_lpdf(y);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("std_normal_lpdf", &std_normal_lpdf);
}