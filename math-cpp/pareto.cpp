#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double pareto_lpdf(double y, double y_min, double alpha) {
    return stan::math::pareto_lpdf(y, y_min, alpha);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("pareto_lpdf", &pareto_lpdf);
}