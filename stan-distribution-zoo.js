var height;
var width;
var figure_x_axis_text;

var all_distributions = {
    "Unbounded Continuous": ["cauchy", "double_exponential", "exp_mod_normal", "gumbel",
        "logistic", "normal", "skew_double_exponential", "skew_normal", "std_normal", "student_t"],
    "Positive Continuous": ["chi_square", "exponential", "frechet", "gamma", "inv_chi_square",
        "inv_gamma", "loglogistic", "lognormal", "rayleigh", "scaled_inv_chi_square", "weibull"],
    "Positive Lower-Bounded": ["pareto", "pareto_type_2", "wiener", "wiener_full"],
    "Continuous on [0, 1]": ["beta", "beta_proportion"],
    "Circular": ["von_mises"],
    "Bounded Continuous": ["uniform"],
    "Bounded Discrete": ["bernoulli", "bernoulli_logit", "beta_binomial", "binomial",
        "binomial_logit", "discrete_range", "hypergeometric"],
    "Unbounded Discrete": ["beta_neg_binomial", "neg_binomial", "neg_binomial_2",
        "neg_binomial_2_log", "poisson", "poisson_log", "yule_simon"],
    "Custom": ["beta_unbounded"]
};

function add_navigation() {
    var current = window.location.pathname.split("/").pop().replace(".html", "");
    var nav = $('<div class="nav-bar"></div>');
    nav.append('<a class="nav-home" href="index.html">Stan distributions</a>');
    var select = $('<select class="nav-select"></select>');
    select.append('<option value="" disabled>Jump to distribution</option>');
    for (var category in all_distributions) {
        var group = $('<optgroup label="' + category + '"></optgroup>');
        all_distributions[category].forEach(function (name) {
            group.append('<option value="' + name + '.html">' + name + '</option>');
        });
        select.append(group);
    }
    select.val(current + ".html");
    if (!select.val()) {
        select.prop("selectedIndex", 0);
    }
    select.on("change", function () {
        window.location.href = $(this).val();
    });
    nav.append(select);
    $("body").prepend(nav);
}
function add_figure(x_axis_text) {

    figure_x_axis_text = x_axis_text;
    update_data()

    if (continuous) {
        const margin = { top: 30, right: 50, bottom: 30, left: 50 };
        width = $("#figure").width() - margin.left - margin.right;
        height = 500 - margin.top - margin.bottom;

        svg = d3.select("#figure")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom + 20)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        x = d3.scaleLinear().range([0, width]);
        xAxis = d3.axisBottom().scale(x);
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .attr("class", "myXaxis")

        y = d3.scaleLinear().range([height, 0]);
        yAxis = d3.axisLeft().scale(y);
        svg.append("g")
            .attr("class", "myYaxis")
    } else {
        const margin = { top: 30, right: 50, bottom: 30, left: 50 };
        width = $("#figure").width() - margin.left - margin.right;
        height = 500 - margin.top - margin.bottom;
        // append the svg object to the body of the page
        svg = d3.select("#figure")
            .append("svg")
            .attr("width", width + margin.left + margin.right + 20)
            .attr("height", height + margin.top + margin.bottom + 20)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Initialize the X axis
        x = d3.scaleBand()
            .range([0, width])
            .padding(0.2);
        xAxis = svg.append("g")
            .attr("transform", `translate(0,${height})`)

        // Initialize the Y axis
        y = d3.scaleLinear()
            .range([height, 0]);
        yAxis = svg.append("g")
            .attr("class", "myYaxis")

    }

    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", width/2)
        .attr("y", height+30)
        .text(x_axis_text);

    update()
}

function setup_page(settings) {
    $(document).ready(function () {
        add_navigation();
        $("head").append($("<title>" + settings.function_name + "</title>"));
        var body = $("body");
        var function_name = $('<div class="distribution-name"><h2>' + settings.function_name + '</h2></div>');
        body.append(function_name);

        var layout = $('<div class="main-layout"></div>');
        var controls = $('<div class="controls"></div>');
        layout.append($("#figure")).append(controls);
        body.append(layout);

        for (i = 0; i < settings.sliders.length; i++) {
            var label = $('<label for="' + settings.sliders[i].name + '_slider">' + settings.sliders[i].text + '</label>');
            var inp = $('<input type="range" class="range" value="'
                + settings.sliders[i].value + '" min="' + settings.sliders[i].min
                + '" max="' + settings.sliders[i].max + '" step="' + settings.sliders[i].step
                + '" id="' + settings.sliders[i].name + '" name="' + settings.sliders[i].name + '" >');
            var num = $('<input type="number" class="num-input" step="'
                + settings.sliders[i].step + '" value="' + settings.sliders[i].value + '">');
            inp.on("input", function () {
                $(this).parent().children('.num-input').val($(this).val());
            });
            inp.on("change", function () {
                params[$(this).attr("name")] = parseFloat($(this).val());
                update()
            })
            num.on("change", function () {
                var v = parseFloat($(this).val());
                if (isNaN(v)) {
                    return;
                }
                var range = $(this).parent().children('.range');
                params[range.attr("name")] = v;
                range.val(v);
                update()
            })
            var slider = $('<div class="range-wrap"></div>');
            controls.append(slider.append(label).append(num).append(inp));
        }
        if (settings.exponentiate) {
            var exp_check = $(
                '<div class="range-wrap">' +
                '<label class="container">Exponentiate<input type="checkbox" id="exp-check" ><span class="checkmark" id="exp"></span></label></div>');
            exp_check.on("change", function () {
                update()
            })
            controls.append(exp_check);
        }
        var add_text = $(settings.additional_text);
        body.append(add_text)
        if (window.hljs) {
            add_text.find("pre code").each(function () {
                hljs.highlightElement(this);
            });
        }
        add_figure(settings.x_axis_text)

        var resize_timer;
        $(window).on("resize", function () {
            clearTimeout(resize_timer);
            resize_timer = setTimeout(function () {
                d3.select("#figure").select("svg").remove();
                add_figure(figure_x_axis_text);
            }, 200);
        });
    });
}

function update() {
    update_data()

    if (continuous) {
        if (typeof x_axis_start !== 'undefined') {
            x_domain_min = x_axis_start
        } else {
            x_domain_min = d3.min(data, function (d) { return d.ser1 })
        }
        if (typeof x_axis_stop !== 'undefined') {
            x_domain_max = x_axis_stop
        } else {
            x_domain_max = d3.max(data, function (d) { return d.ser1 })
        }
        x.domain([x_domain_min, x_domain_max]);
        svg.selectAll(".myXaxis").transition()
            .duration(2000)
            .call(xAxis);
        
        y.domain([d3.min(data, function (d) { return d.ser2 }), d3.max(data, function (d) { return d.ser2 })]);
        svg.selectAll(".myYaxis")
            .transition()
            .duration(2000)
            .call(yAxis);

        const u = svg.selectAll(".lineTest")
            .data([data], function (d) { return d.ser1 });

        u
            .join("path")
            .attr("class", "lineTest")
            .transition()
            .duration(2000)
            .attr("d", d3.line()
                .x(function (d) { return x(d.ser1); })
                .y(function (d) { return y(d.ser2); }))
            .attr("fill", "none")
            .attr("stroke", "#b2001d")
            .attr("stroke-width", 3.5)
    } else {
        x.domain(data.map(d => d.ser1))
        xAxis.call(d3.axisBottom(x))

        y.domain([d3.min(data, d => d.ser2), d3.max(data, d => d.ser2)]);
        yAxis.transition().duration(1000).call(d3.axisLeft(y));

        var u = svg.selectAll("rect")
            .data(data)

        u
            .join("rect")
            .transition()
            .duration(1000)
            .attr("x", d => x(d.ser1))
            .attr("y", d => y(d.ser2))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.ser2))
            .attr("fill", "#b2001d")
    }

}

