#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double student_t_lpdf(double y, double nu, double mu, double sigma) {
    return stan::math::student_t_lpdf(y, nu, mu, sigma);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("student_t_lpdf", &student_t_lpdf);
}