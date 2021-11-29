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
                + '" id="' + settings.sliders[i].name + '" name="' + settings.sliders[i].name + '" ></input>');
            var out = $('<output class="bubble"></output>');
            var slider = $('<div class="range-wrap"></div>');
            body.append(slider.append(label).append(inp).append(out));
        }
        if (settings.exponentiate) {
            var exp_check = $(
                '<div class="range-wrap">' +
                '<label class="container">Exponantiate<input type="checkbox" id="exp-check" ><span class="checkmark" id="exp"></span></label></div>');
            body.append(exp_check);
        }
        if (settings.figure) {
            body.append($('<div id="figure"></div>'));
        }
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
}
