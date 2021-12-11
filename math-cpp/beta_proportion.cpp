#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double beta_proportion_lpdf(double theta, double mu, double kappa) {
    return stan::math::beta_proportion_lpdf(theta, mu, kappa);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("beta_proportion_lpdf", &beta_proportion_lpdf);
}