#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double gumbel_lpdf(double y, double mu, double beta) {
    return stan::math::gumbel_lpdf(y, mu, beta);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("gumbel_lpdf", &gumbel_lpdf);
}