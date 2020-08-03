
$(document).ready(() => {
    new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
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

//Logo Section
$('.logo-section > div > div > i').hover(
    function () { $(this).addClass('colored') },
    function () { $(this).removeClass('colored') }
)
