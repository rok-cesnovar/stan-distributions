var Module = {
    onRuntimeInitialized: function() {
        var exponantiate = false
        var y_range = 40;
        var mu = 10;
        var phi = 3;
        // var data1 = [];

        function update_data() {
            data1 = []
            for (let y = 1; y < y_range; y = y + 1) {
                if (exponantiate) {
                    data1.push({group: y, value: Math.exp(Module.neg_binomial_2_lpmf(y, mu, phi))})
                } else {
                    data1.push({group: y, value: Module.neg_binomial_2_lpmf(y, mu, phi)})
                }                
            }
        }
 

        update_data()

        // set the dimensions and margins of the graph
        const margin = {top: 30, right: 30, bottom: 70, left: 60},
        width = 800 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select("#figure")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

        // Initialize the X axis
        const x = d3.scaleBand()
        .range([ 0, width ])
        .padding(0.2);
        const xAxis = svg.append("g")
        .attr("transform", `translate(0,${height})`)

        // Initialize the Y axis
        const y = d3.scaleLinear()
        .range([ height, 0]);
        const yAxis = svg.append("g")
        .attr("class", "myYaxis")

        // Create a function that takes a dataset as input and update the plot:
        function update(data) {
            update_data()
            // Update the X axis
            x.domain(data.map(d => d.group))
            xAxis.call(d3.axisBottom(x))

            // Update the Y axis
            y.domain([d3.min(data, d => d.value), d3.max(data, d => d.value) ]);
            yAxis.transition().duration(1000).call(d3.axisLeft(y));

            // Create the u variable
            var u = svg.selectAll("rect")
                .data(data)

            u
                .join("rect") // Add a new rect for each new elements
                .transition() 
                .duration(1000)
                .attr("x", d => x(d.group))
                .attr("y", d => y(d.value))
                .attr("width", x.bandwidth())
                .attr("height", d => height - y(d.value))
                .attr("fill", "#b2001d")
        }

        // At the beginning, I run the update function on the first dataset:
        update(data1)
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
        d3.select("#phi_slider").on("change", function(d){
            phi = this.value
            update_data()
            update(data1)
        })
        $(document).ready(function(){
            d3.select("#exp-check").on("change", function(d){
                exponantiate = $("#exp-check")[0].checked
                update_data()
                update(data1)
            })
        });
    }
  };

  $(document).ready(function(){
    const allRanges = document.querySelectorAll(".range-wrap");
    allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");
    
    range.addEventListener("input", () => {
       setBubble(range, bubble);
    });
    setBubble(range, bubble);
    });
    
    function setBubble(range, bubble) {
        const val = range.value;
        const min = range.min ? range.min : 0;
        const max = range.max ? range.max : 100;
        const newVal = Number(((val - min) * 100) / (max - min));
        bubble.innerHTML = val;
        
        // Sorta magic numbers based on size of the native UI thumb
        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }

    $("input").style.backgroundColor = '#b2001d';
 });         