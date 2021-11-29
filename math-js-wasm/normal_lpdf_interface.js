
function dada() {
        var exponantiate = false
        var y_range = 10;
        var mu = 0;
        var sigma = 1;
        var data1 = [];

        function update_data() {
            data1 = []
            for (let y = -y_range; y < y_range; y = y + y_range*0.01) {
                if (exponantiate) {
                    data1.push({ser1: y, ser2: Math.exp(Module.normal_lpdf(y, mu, sigma))})
                } else {
                    data1.push({ser1: y, ser2: Module.normal_lpdf(y, mu, sigma)})
                }
            }
        }
        update_data()

        // set the dimensions and margins of the graph
        const margin = {top: 10, right: 30, bottom: 30, left: 50},
        width = 800 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select("#figure")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

        // Initialise a X axis:
        const x = d3.scaleLinear().range([0,width]);
        const xAxis = d3.axisBottom().scale(x);
        svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .attr("class","myXaxis")

        // Initialize an Y axis
        const y = d3.scaleLinear().range([height, 0]);
        const yAxis = d3.axisLeft().scale(y);
        svg.append("g")
        .attr("class","myYaxis")

        // Create a function that takes a dataset as input and update the plot:
        function update(data) {
            update_data()
            // Create the X axis:
            x.domain([-y_range , y_range ]);
            svg.selectAll(".myXaxis").transition()
            .duration(3000)
            .call(xAxis);

            max_val = d3.max(data, function(d) { return d.ser2  })
            // create the Y axis
            y.domain([d3.min(data, function(d) { return d.ser2  }), max_val+0.1*max_val ]);
            svg.selectAll(".myYaxis")
            .transition()
            .duration(3000)
            .call(yAxis);

            // Create a update selection: bind to the new data
            const u = svg.selectAll(".lineTest")
            .data([data], function(d){ return d.ser1 });

            // Updata the line
            u
            .join("path")
            .attr("class","lineTest")
            .transition()
            .duration(3000)
            .attr("d", d3.line()
                .x(function(d) { return x(d.ser1); })
                .y(function(d) { return y(d.ser2); }))
                .attr("fill", "none")
                .attr("stroke", "#b2001d")
                .attr("stroke-width", 3.5)
        }

        // At the beginning, I run the update function on the first dataset:
        update(data1)

        $(document).ready(function(){
            d3.select("#y_range_slider").on("change", function(d){
                y_range = this.value
                update_data()
                update(data1)
            })
            d3.select("#mu_slider").on("change", function(d){
                mu = this.value
                update_data()
                update(data1)
            })
            d3.select("#sigma_slider").on("change", function(d){
                sigma = this.value
                update_data()
                update(data1)
            })
            d3.select("#exp-check").on("change", function(d){
                exponantiate = $("#exp-check")[0].checked
                update_data()
                update(data1)
            })
        });
}        