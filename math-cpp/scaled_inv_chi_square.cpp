#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double scaled_inv_chi_square_lpdf(double y, double nu, double sigma) {
    return stan::math::scaled_inv_chi_square_lpdf(y, nu, sigma);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("scaled_inv_chi_square_lpdf", &scaled_inv_chi_square_lpdf);
}