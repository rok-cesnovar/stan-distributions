// quick_example.cpp
#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double normal_lpdf(double y, double mu, double sigma) {
    return stan::math::normal_lpdf(y, mu, sigma);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("normal_lpdf", &normal_lpdf);
}