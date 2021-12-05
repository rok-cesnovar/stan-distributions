#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double rayleigh_lpdf(double y, double sigma) {
    return stan::math::rayleigh_lpdf(y, sigma);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("rayleigh_lpdf", &rayleigh_lpdf);
}