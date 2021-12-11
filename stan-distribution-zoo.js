var height;
var width;
function add_figure(x_axis_text) {

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
                '<label class="container">Exponentiate<input type="checkbox" id="exp-check" ><span class="checkmark" id="exp"></span></label></div>');
            exp_check.on("change", function () {
                update()
            })
            body.append(exp_check);
        }
        add_figure(settings.x_axis_text)
    });


}

function update() {
    update_data()

    if (continuous) {
        x.domain([d3.min(data, function (d) { return d.ser1 }), d3.max(data, function (d) { return d.ser1 })]);
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

