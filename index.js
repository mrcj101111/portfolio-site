
$(document).ready(() => {
    new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Particle.js
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 600,
                "density": {
                    "enable": true,
                    "value_area": 641.3648243462092
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 4
                },
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 1.5,
                "random": true,
            },
            "line_linked": {
                "enable": false,
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                },
                "onclick": {
                    "enable": false,
                },
                "resize": true
            },
        },
        "retina_detect": true
    });
})

// AOS
AOS.init();


// amcharts
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

chart.logo.height = -1000; //Hide amcharts logo

chart.data = [
    {
        name: "Software \n Development",
        children: [
            {
                name: "Websites", value: 3,
            },
            {
                name: "Custom \n Software", value: 3
            },
            {
                name: "Design", value: 2
            },
            {
                name: "Hosting", value: 2
            },
            {
                name: "Site \n Maintenance", value: 5
            },
        ]
    }
];

networkSeries.dataFields.value = "value";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.children = "children";
networkSeries.nodes.template.tooltipText = "{name}";
networkSeries.nodes.template.fillOpacity = 1;
networkSeries.nodes.template.label.truncate = true;
networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 10;

networkSeries.links.template.strokeWidth = 1;

var hoverState = networkSeries.links.template.states.create("hover");
hoverState.properties.strokeWidth = 2;
hoverState.properties.strokeOpacity = 1;

networkSeries.nodes.template.events.on("over", function (event) {
    event.target.dataItem.childLinks.each(function (link) {
        link.isHover = true;
    })
    if (event.target.dataItem.parentLink) {
        event.target.dataItem.parentLink.isHover = true;
    }

})

networkSeries.nodes.template.events.on("out", function (event) {
    event.target.dataItem.childLinks.each(function (link) {
        link.isHover = false;
    })
    if (event.target.dataItem.parentLink) {
        event.target.dataItem.parentLink.isHover = false;
    }
})
