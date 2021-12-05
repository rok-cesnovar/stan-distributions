#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double skew_normal_lpdf(double y, double xi, double omega, double alpha) {
    return stan::math::skew_normal_lpdf(y, xi, omega, alpha);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("skew_normal_lpdf", &skew_normal_lpdf);
}