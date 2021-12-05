#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double double_exponential_lpdf(double y, double mu, double sigma) {
    return stan::math::double_exponential_lpdf(y, mu, sigma);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("double_exponential_lpdf", &double_exponential_lpdf);
}