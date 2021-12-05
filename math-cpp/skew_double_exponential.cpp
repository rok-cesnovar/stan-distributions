#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double skew_double_exponential_lpdf(double y, double mu, double sigma, double tau) {
    return stan::math::skew_double_exponential_lpdf(y, mu, sigma, tau);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("skew_double_exponential_lpdf", &skew_double_exponential_lpdf);
}