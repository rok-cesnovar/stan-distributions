#include <emscripten/bind.h>
#include <stan/math/prim.hpp>

#include <cmath>

using namespace emscripten;

double beta_unbounded_lpdf(double y, double yupp, double mu, double phi) {
      double denominator = ((phi - 1) * stan::math::log(yupp));
      double logGamma = (stan::math::lgamma(phi) -
                        (stan::math::lgamma((mu * phi)) +
                        stan::math::lgamma(((1 - mu) * phi))));
      double numerator = ((((mu * phi) - 1) * stan::math::log(y)) +
                    ((((1 - mu) * phi) - 1) * stan::math::log((yupp - y))));
      return (numerator - denominator) + logGamma;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("beta_unbounded_lpdf", &beta_unbounded_lpdf);
}