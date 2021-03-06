# Stan distributions

A web app to visualize distributions in Stan. It uses Stan Math C++ code to evaluate the log probability density/mass functions. The Stan Math C++ is compiled to Webassembly using [Emscripten](https://emscripten.org/index.html). [d3.js](https://d3js.org/) is used for visualizations.

This was inspired by the [distribution zoo](https://github.com/ben18785/distribution-zoo). The main differences of this approach are: 
- it runs entirely in the user's browser and does not require a server (very easy to fork and deploy your own custom version),
- it uses the actual Stan C++ for all density/mass functions (Distribution zoo is based on R distribution implementations).

This currently supports the majority of Stan's univariate continuous distributions. Missing discrete distributions will be added shortly.

## Links

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

### Positive Lower-Bounded Distributions

- [pareto](https://rok-cesnovar.github.io/stan-distributions/pareto)

- [pareto_type_2](https://rok-cesnovar.github.io/stan-distributions/pareto_type_2)

- [wiener](https://rok-cesnovar.github.io/stan-distributions/wiener)

### Continuous Distributions on [0, 1]

- [beta](https://rok-cesnovar.github.io/stan-distributions/beta)

- [beta_proportion](https://rok-cesnovar.github.io/stan-distributions/beta_proportion)

### Circular Distributions

- [von_mises](https://rok-cesnovar.github.io/stan-distributions/von_mises)

### Bounded Continuous Distributions

- [uniform](https://rok-cesnovar.github.io/stan-distributions/uniform)
### Unbounded Discrete Distributions

- [neg_binomial](https://rok-cesnovar.github.io/stan-distributions/neg_binomial)

- [neg_binomial_2](https://rok-cesnovar.github.io/stan-distributions/neg_binomial_2)

- [neg_binomial_2_log](https://rok-cesnovar.github.io/stan-distributions/neg_binomial_2_log)

- [poisson](https://rok-cesnovar.github.io/stan-distributions/poisson)

- [poisson_log](https://rok-cesnovar.github.io/stan-distributions/poisson_log)

## Custom distributions

- [beta_unbounded](https://rok-cesnovar.github.io/stan-distributions/beta_unbounded)

Contributed by @noejn2.

## Running it locally

1. Clone the repository

```
git clone https://github.com/rok-cesnovar/stan-distributions/
```

2. Start a simple Python server

This is required in order to serve the .wasm files. The actual computation still happens in the browser.

```
python3 -m http.server 8000
```

3. Open localhost:8000 in your favorite browser. Change the port number in step 2 if needed.
