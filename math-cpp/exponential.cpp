#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double exponential_lpdf(double y, double beta) {
    return stan::math::exponential_lpdf(y, beta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("exponential_lpdf", &exponential_lpdf);
}