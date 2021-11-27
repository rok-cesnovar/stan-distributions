// quick_example.cpp
#include <emscripten/bind.h>
#include <stan/math.hpp>
#include <cmath>

using namespace emscripten;

float ssqrt(float a) {
    return std::sqrt(a);
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("ssqrt", &ssqrt);
}