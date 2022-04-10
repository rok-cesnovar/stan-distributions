REMOVE_TBB_HPPS="-DSTAN_MATH_PRIM_CORE_INIT_THREADPOOL_TBB_HPP -DSTAN_MATH_PRIM_FUNCTOR_REDUCE_SUM_HPP -DSTAN_MATH_PRIM_FUNCTOR_REDUCE_SUM_STATIC_HPP"
CXXFLAGS="-std=c++1y -D_REENTRANT -Wno-sign-compare -Wno-ignored-attributes  -O3 -DBOOST_DISABLE_ASSERTS"

FILE=$1

emcc $REMOVE_TBB_HPPS -o math-js-wasm/$FILE.js --bind math-cpp/$FILE.cpp $CXXFLAGS -I /home/rok/Desktop/cmdstan/stan/lib/stan_math/ -I /home/rok/Desktop/cmdstan/stan/lib/stan_math/lib/eigen_3.3.9 -I /home/rok/Desktop/cmdstan/stan/lib/stan_math/lib/boost_1.75.0 -I /home/rok/Desktop/cmdstan/stan/lib/stan_math/lib/sundials_6.1.1/include -I /home/rok/Desktop/cmdstan/stan/lib/stan_math/lib/sundials_6.1.1/src/sundials