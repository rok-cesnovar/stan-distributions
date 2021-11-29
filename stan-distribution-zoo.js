function add_figure(continous) {

    update_data()
    
    if (continous) {
        const margin = { top: 30, right: 30, bottom: 30, left: 30 },
        width = $("#figure").width() - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

        svg = d3.select("#figure")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
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

    }

    

    update(continous)
}

function setBubble(range, bubble) {
    const val = range.val();
    const min = range.attr("min");
    const max = range.attr("max");
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble
        .html(val)
        .css("left", `calc(${newVal}% + (${8 - newVal * 0.15}px))`);
}

function setup_page(settings) {
    $(document).ready(function () {
        $("head").append($("<title>" + settings.function_name + "</title>"));
        var body = $("body");
        var function_name = $('<div class="distribution-name"><h2>' + settings.function_name + '</h2></div>');
        body.append(function_name);

        for (i = 0; i < settings.sliders.length; i++) {
            var label = $('<label for="' + settings.sliders[i].name + '_slider">' + settings.sliders[i].text + '</label>');
            var inp = $('<input type="range" class="range" value="'
                + settings.sliders[i].value + '" min="' + settings.sliders[i].min
                + '" max="' + settings.sliders[i].max + '" step="' + settings.sliders[i].step
                + '" id="' + settings.sliders[i].name + '" name="' + settings.sliders[i].name + '" >');
            var out = $('<output class="bubble"></output>');
            inp.on("input", function () {

                setBubble($(this), $(this).parent().children('.bubble'))
            });
            inp.on("change", function () {
                $(".range").each(function () {
                    params[$(this).attr("name")] = $(this).val();
                });
                update()
            })
            setBubble(inp, out);
            var slider = $('<div class="range-wrap"></div>');
            body.append(slider.append(label).append(inp).append(out));
        }
        if (settings.exponentiate) {
            var exp_check = $(
                '<div class="range-wrap">' +
                '<label class="container">Exponantiate<input type="checkbox" id="exp-check" ><span class="checkmark" id="exp"></span></label></div>');
            exp_check.on("change", function () {
                update()
            })
            body.append(exp_check);
        }
        add_figure(settings.continous)
    });


}

function update(continous) {
    update_data()

    x.domain([d3.min(data, function (d) { return d.ser1 }), d3.max(data, function (d) { return d.ser1 })]);
    svg.selectAll(".myXaxis").transition()
        .duration(3000)
        .call(xAxis);

    y.domain([d3.min(data, function (d) { return d.ser2 }), d3.max(data, function (d) { return d.ser2 })]);
    svg.selectAll(".myYaxis")
        .transition()
        .duration(3000)
        .call(yAxis);

    const u = svg.selectAll(".lineTest")
        .data([data], function (d) { return d.ser1 });

    u
        .join("path")
        .attr("class", "lineTest")
        .transition()
        .duration(3000)
        .attr("d", d3.line()
            .x(function (d) { return x(d.ser1); })
            .y(function (d) { return y(d.ser2); }))
        .attr("fill", "none")
        .attr("stroke", "#b2001d")
        .attr("stroke-width", 3.5)
}

