#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double inv_gamma_lpdf(double y, double alpha, double beta) {
    return stan::math::inv_gamma_lpdf(y, alpha, beta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("inv_gamma_lpdf", &inv_gamma_lpdf);
}