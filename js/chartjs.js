Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
            // Get ctx from string
            var ctx = chart.chart.ctx;

            // Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var maxFontSize = centerConfig.maxFontSize || 75;
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            // Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
            var minFontSize = centerConfig.minFontSize;
            var lineHeight = centerConfig.lineHeight || 25;
            var wrapText = false;

            if (minFontSize === undefined) {
                minFontSize = 20;
            }

            if (minFontSize && fontSizeToUse < minFontSize) {
                fontSizeToUse = minFontSize;
                wrapText = true;
            }

            // Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            if (!wrapText) {
                ctx.fillText(txt, centerX, centerY);
                return;
            }

            var words = txt.split(' ');
            var line = '';
            var lines = [];

            // Break words up into multiple lines if necessary
            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + ' ';
                var metrics = ctx.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > elementWidth && n > 0) {
                    lines.push(line);
                    line = words[n] + ' ';
                } else {
                    line = testLine;
                }
            }

            // Move the center up depending on line height and number of lines
            centerY -= (lines.length / 2) * lineHeight;

            for (var n = 0; n < lines.length; n++) {
                ctx.fillText(lines[n], centerX, centerY);
                centerY += lineHeight;
            }
            //Draw text in center
            ctx.fillText(line, centerX, centerY);
        }
    }
});


var config = {
    type: 'doughnut',
    holeSize: 23,
    data: {
        labels: [
            "Approved",
            "none",
        ],
        datasets: [{
            data: [200, 500],
            pointRadius: 0,
            backgroundColor: [
                "#00A886",
                "#EDF0F5"
            ],
            hoverBackgroundColor: [
                "#00A886",
                "#EDF0F5"

            ]
        }]
    },
    options: {
        devicePixelRatio: 1.5,
        cutoutPercentage: 70,
        elements: {
            center: {
                text: '42%',
                color: "#00A886", // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25,
                // Default is 25 (in px), used for when text wraps
            }
        },
        legend: {
            display: false
        }
    }

};


var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, config);


//---------------------------------------------------------------------------//




var configI = {
    type: 'doughnut',
    holeSize: 23,
    data: {
        labels: [
            "In Progress",
            "none",
        ],
        datasets: [{
            data: [800, 800],
            pointRadius: 0,
            backgroundColor: [
                "#FAA21B",
                "#EDF0F5"
            ],
            hoverBackgroundColor: [
                "#ED9A1C",
                "#EDF0F5"

            ]
        }]
    },
    options: {
        devicePixelRatio: 1.5,
        cutoutPercentage: 70,
        elements: {
            center: {
                text: '50%',
                color: "#FAA21B", // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25,
                // Default is 25 (in px), used for when text wraps
            }
        },
        legend: {
            display: false
        }
    }

};

var ctxI = document.getElementById("myChart2").getContext("2d");
var myChartI = new Chart(ctxI, configI);

//---------------------------------------------------------------------------------------------------------------------------//
var configII = {
    type: 'doughnut',
    holeSize: 23,
    data: {
        labels: [
            "Rejected",
            "none",
        ],
        datasets: [{
            data: [800, 800],
            pointRadius: 0,
            backgroundColor: [
                "#EF3A4C",
                "#EDF0F5"
            ],
            hoverBackgroundColor: [
                "#E44A5A",
                "#EDF0F5"

            ]
        }]
    },
    options: {
        devicePixelRatio: 1.5,
        cutoutPercentage: 70,
        elements: {
            center: {
                text: '50%',
                color: "#EF3A4C", // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25,
                // Default is 25 (in px), used for when text wraps
            }
        },
        legend: {
            display: false
        }
    }

};

var ctxII = document.getElementById("myChart3").getContext("2d");
var myCharII = new Chart(ctxII, configII);

//-------------------------------------------------------------------------------------//

var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 16;

var oilData = {
    labels: [
        "Rejected",
        "In Progress",
        "Approved"
    ],
    datasets: [
        {
            data: [133.3, 86.2, 52.2],
            backgroundColor: [
                "#EF3A4C",
                "#FAA21B",
                "#00A886"

            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
    type: 'pie',
    data: oilData
});

//------------------------------------------------------------//

var ctx = document.getElementById("mybarChart").getContext("2d");

var mybarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Rejected', 'In Progress', 'Approved'],
        datasets: [{
            label: ['My First Dataset'],

            barPercentage: 0.5,
            barThickness: 100,
            maxBarThickness: 100,
            minBarLength: 2,
            data: [10, 800, 300, 40, 900, 60, 70, 900],
            backgroundColor: [
                '#EF3A4C',
                '#FAA21B',
                '#00A886'
            ],

        }]
    },

    options: {
        legend: {
            display: true,
            responsive: true,
            position: 'top',
            aspectRatio: 1,
            labels: {
                fontColor: "#000080",
                fontFamily: 'comic sans ms'
            }
        },

    }
});
