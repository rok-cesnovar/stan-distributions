#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double exp_mod_normal_lpdf(double y, double mu, double sigma, double lambda) {
    return stan::math::exp_mod_normal_lpdf(y, mu, sigma, lambda);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("exp_mod_normal_lpdf", &exp_mod_normal_lpdf);
}