#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double von_mises_lpdf(double y, double mu, double kappa) {
    return stan::math::von_mises_lpdf(y, mu, kappa);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("von_mises_lpdf", &von_mises_lpdf);
}