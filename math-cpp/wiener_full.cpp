#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double wiener_full_lpdf(double y, double a, double t0, double w, double v, double sv, double sw, double st0) {
    return stan::math::wiener_lpdf(y, a, t0, w, v, sv, sw, st0);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("wiener_full_lpdf", &wiener_full_lpdf);
}
