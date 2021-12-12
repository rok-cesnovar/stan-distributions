#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double wiener_lpdf(double y, double alpha, double tau, double beta, double delta) {
    return stan::math::wiener_lpdf(y, alpha, tau, beta, delta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("wiener_lpdf", &wiener_lpdf);
}