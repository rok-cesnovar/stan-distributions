# stan-distributions

A web app to visualize distributions in Stan. It uses Stan Math C++ code to evaluate the log probability density/mass functions. The Stan Math C++ is compiled to Webassembly using [Emscripten](https://emscripten.org/index.html). [d3.js](https://d3js.org/) is used for visualizations.

This was inspired by the [distribution zoo](https://github.com/ben18785/distribution-zoo). The main differences of this approach are: 
- it runs entirely in the browser and does not require a server
- it uses the Stan implementation for all density/mass functions (Distribution zoo is based on R implementations)

This currently supports the majority of Stan's continuous density functions. Mass functions will be added shortly.

### Unbounded Continuous Distributions

- [cauchy](https://rok-cesnovar.github.io/stan-distributions/cauchy)

- [double_exponential](https://rok-cesnovar.github.io/stan-distributions/double_exponential)

- [exp_mod_normal](https://rok-cesnovar.github.io/stan-distributions/exp_mod_normal)

- [gumbel](https://rok-cesnovar.github.io/stan-distributions/gumbel)

- [logistic](https://rok-cesnovar.github.io/stan-distributions/logistic)

- [normal](https://rok-cesnovar.github.io/stan-distributions/normal)

- [skew_double_exponential](https://rok-cesnovar.github.io/stan-distributions/skew_double_exponential)

- [skew_normal](https://rok-cesnovar.github.io/stan-distributions/skew_normal)

- [std_normal](https://rok-cesnovar.github.io/stan-distributions/std_normal)

- [student_t](https://rok-cesnovar.github.io/stan-distributions/student_t)

### Positive Continuous Distributions

- [chi_square](https://rok-cesnovar.github.io/stan-distributions/chi_square)

- [exponential](https://rok-cesnovar.github.io/stan-distributions/exponential)

- [frechet](https://rok-cesnovar.github.io/stan-distributions/frechet)

- [gamma](https://rok-cesnovar.github.io/stan-distributions/gamma)

- [inv_chi_square](https://rok-cesnovar.github.io/stan-distributions/inv_chi_square)

- [inv_gamma](https://rok-cesnovar.github.io/stan-distributions/inv_gamma)

- [lognormal](https://rok-cesnovar.github.io/stan-distributions/lognormal)

- [rayleigh](https://rok-cesnovar.github.io/stan-distributions/rayleigh)

- [scaled_inv_chi_square](https://rok-cesnovar.github.io/stan-distributions/scaled_inv_chi_square)

- [weibull](https://rok-cesnovar.github.io/stan-distributions/weibull)

### Continuous Distributions on [0, 1]

- [beta](https://rok-cesnovar.github.io/stan-distributions/beta)

- [beta_proportion](https://rok-cesnovar.github.io/stan-distributions/beta_proportion)

### Circular Distributions

- [von_mises](https://rok-cesnovar.github.io/stan-distributions/von_mises)
### Unbounded Discrete Distributions

- [neg_binomial_2](https://rok-cesnovar.github.io/stan-distributions/neg_binomial_2)
