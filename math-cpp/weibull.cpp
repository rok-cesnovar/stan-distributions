#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double weibull_lpdf(double y, double alpha, double beta) {
    return stan::math::weibull_lpdf(y, alpha, beta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("weibull_lpdf", &weibull_lpdf);
}