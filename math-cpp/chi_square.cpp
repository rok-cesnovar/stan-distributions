#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double chi_square_lpdf(double y, double nu) {
    return stan::math::chi_square_lpdf(y, nu);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("chi_square_lpdf", &chi_square_lpdf);
}