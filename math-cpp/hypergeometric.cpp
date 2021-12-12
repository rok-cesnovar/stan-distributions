#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double hypergeometric_lpmf(int n, int N, double a, double b) {
    return stan::math::hypergeometric_lpmf(n, N, a, b);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("hypergeometric_lpmf", &hypergeometric_lpmf);
}