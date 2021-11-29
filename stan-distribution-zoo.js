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
            inp.on("input", function() {
                
                setBubble($(this), $(this).parent().children('.bubble'))
            });
            setBubble(inp, out);
            var slider = $('<div class="range-wrap"></div>');
            body.append(slider.append(label).append(inp).append(out));
        }
        if (settings.exponentiate) {
            var exp_check = $(
                '<div class="range-wrap">' +
                '<label class="container">Exponantiate<input type="checkbox" id="exp-check" ><span class="checkmark" id="exp"></span></label></div>');
            body.append(exp_check);
        }
        
        add_figure()
        // d3.select("#y_range_slider").on("change", function(d){
        //     y_range = this.value
        //     update_data()
        //     update(data1)
        // })
        // d3.select("#mu_slider").on("change", function(d){
        //     mu = this.value
        //     update_data()
        //     update(data1)
        // })
        // d3.select("#sigma_slider").on("change", function(d){
        //     sigma = this.value
        //     update_data()
        //     update(data1)
        // })
        // d3.select("#exp-check").on("change", function(d){
        //     exponantiate = $("#exp-check")[0].checked
        //     update_data()
        //     update(data1)
        // })
    });


}
