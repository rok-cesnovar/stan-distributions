#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double loglogistic_lpdf(double y, double alpha, double beta) {
    return stan::math::loglogistic_lpdf(y, alpha, beta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("loglogistic_lpdf", &loglogistic_lpdf);
}
