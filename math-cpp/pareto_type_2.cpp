#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double pareto_type_2_lpdf(double y, double mu, double lambda, double alpha) {
    return stan::math::pareto_type_2_lpdf(y, mu, lambda, alpha);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("pareto_type_2_lpdf", &pareto_type_2_lpdf);
}