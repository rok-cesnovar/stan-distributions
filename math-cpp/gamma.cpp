#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double gamma_lpdf(double y, double alpha, double beta) {
    return stan::math::gamma_lpdf(y, alpha, beta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("gamma_lpdf", &gamma_lpdf);
}