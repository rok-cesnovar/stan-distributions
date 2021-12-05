#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double lognormal_lpdf(double y, double mu, double sigma) {
    return stan::math::lognormal_lpdf(y, mu, sigma);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("lognormal_lpdf", &lognormal_lpdf);
}