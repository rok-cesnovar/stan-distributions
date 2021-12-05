#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double frechet_lpdf(double y, double alpha, double sigma) {
    return stan::math::frechet_lpdf(y, alpha, sigma);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("frechet_lpdf", &frechet_lpdf);
}