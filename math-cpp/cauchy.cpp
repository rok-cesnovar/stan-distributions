#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double cauchy_lpdf(double y, double mu, double sigma) {
    return stan::math::cauchy_lpdf(y, mu, sigma);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("cauchy_lpdf", &cauchy_lpdf);
}