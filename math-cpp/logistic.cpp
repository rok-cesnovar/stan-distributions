#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double logistic_lpdf(double y, double mu, double sigma) {
    return stan::math::logistic_lpdf(y, mu, sigma);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("logistic_lpdf", &logistic_lpdf);
}