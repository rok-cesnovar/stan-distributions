STAN_MATH="$HOME/Desktop/stan/cmdstan/stan/lib/stan_math"

REMOVE_TBB_HPPS="-DSTAN_MATH_PRIM_CORE_INIT_THREADPOOL_TBB_HPP -DSTAN_MATH_PRIM_FUNCTOR_REDUCE_SUM_HPP -DSTAN_MATH_PRIM_FUNCTOR_REDUCE_SUM_STATIC_HPP"
CXXFLAGS="-std=c++17 -D_REENTRANT -Wno-sign-compare -Wno-ignored-attributes  -O3 -DBOOST_DISABLE_ASSERTS"

FILE=$1

em++ $REMOVE_TBB_HPPS -o math-js-wasm/$FILE.js --bind math-cpp/$FILE.cpp $CXXFLAGS -I $STAN_MATH/ -I $STAN_MATH/lib/eigen_3.4.0 -I $STAN_MATH/lib/boost_1.87.0 -I $STAN_MATH/lib/sundials_6.1.1/include -I $STAN_MATH/lib/sundials_6.1.1/src/sundials
