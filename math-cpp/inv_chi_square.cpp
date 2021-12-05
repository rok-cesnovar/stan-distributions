#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double inv_chi_square_lpdf(double y, double nu) {
    return stan::math::inv_chi_square_lpdf(y, nu);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("inv_chi_square_lpdf", &inv_chi_square_lpdf);
}