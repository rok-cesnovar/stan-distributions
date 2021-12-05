#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double beta_lpdf(double theta, double alpha, double beta) {
    return stan::math::beta_lpdf(theta, alpha, beta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("beta_lpdf", &beta_lpdf);
}