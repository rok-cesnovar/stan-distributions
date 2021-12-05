#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double uniform_lpdf(double y, double alpha, double beta) {
    return stan::math::uniform_lpdf(y, alpha, beta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("uniform_lpdf", &uniform_lpdf);
}