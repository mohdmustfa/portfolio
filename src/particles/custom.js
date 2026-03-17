const particles = {
  "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 500 
        }
      },
      "color": {
        "value": "#625d34"
      },
      "shape": {
        "type": "circle", 
        "stroke": {
          "width": 0.5,
          "color": "#625d34"
        },
        "polygon": { 
          "nb_sides": 35
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true
      },
      "size": {
        "value": 2,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 200, 
        "color": "#625d34",
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out", 
        "bounce": true, 
        "attract": {
          "enable": true,
          "rotateX": 800,
          "rotateY": 1400
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 20,
          "duration": 2,
          "opacity": 0.6,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
  
  particlesJS("particles", particles)



  // nav js
//   document.addEventListener('DOMContentLoaded', function(){
//   window.addEventListener('scroll', function(){
//     var scroll = window.scrollY;
//     if (scroll > 10) {
//       document.querySelector('.top-main-nav').style.backgroundColor = "white";
//       document.querySelector('.top-main-nav').style.transition = ".5s";
//       document.querySelector('.top-main-nav .nav-item .nav-link').style.color = "#4ecaea";
//     }

//     else{
//       document.querySelector('.top-main-nav').style.backgroundColor = "rgba(52, 193, 224, .28)"; 
//       document.querySelector('.top-main-nav .nav-link').style.color = "#fff"; 
//       document.querySelector('.top-main-nav').style.borderBottom = "none";
//     }
//   })
// });


// year for copy right
  document.getElementById("year").textContent = new Date().getFullYear();