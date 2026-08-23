# Stan distributions

A web app to visualize distributions in Stan. It uses Stan Math C++ code to evaluate the log probability density/mass functions. The Stan Math C++ is compiled to Webassembly using [Emscripten](https://emscripten.org/index.html). [d3.js](https://d3js.org/) is used for visualizations.

This was inspired by the [distribution zoo](https://github.com/ben18785/distribution-zoo). The main differences of this approach are: 
- it runs entirely in the user's browser and does not require a server (very easy to fork and deploy your own custom version),
- it uses the actual Stan C++ for all density/mass functions (Distribution zoo is based on R distribution implementations).

All of Stan's univariate distributions with scalar parameters are supported, both continuous and discrete.

**Browse all distributions at [rok-cesnovar.github.io/stan-distributions](https://rok-cesnovar.github.io/stan-distributions/)** — the index page and the navigation dropdown on every page list them by category.

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

## Adding a distribution

1. Add a small C++ wrapper in `math-cpp/<name>.cpp` exposing the Stan Math lpdf/lpmf via Embind.
2. Compile it to WebAssembly with `./compile.sh <name>` (requires Emscripten and a Stan Math checkout; see the paths at the top of the script).
3. Copy an existing HTML page (`normal.html` for continuous, `poisson.html` for discrete) and adjust the parameters, sliders and `update_data()`.
4. Add the page to the `all_distributions` list in `stan-distribution-zoo.js` so it appears in the navigation and on the index page.
