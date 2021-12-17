/* This is to place a custom speed with the carousel,
I also created wrap:true so that the carousel will continuously cycle
without stopping until the buttons are clicked.
If carousel is hovered over, it will pause
I also included touch: true to support left/right swipes on mobile
*/

var myCarousel = document.querySelector('#carouselBaggio')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1750,
  wrap: true,
  pause: 'hover',
  touch: true
});

/* GSAP animation added the GSAP animation to the menu and headers,
as well as the picture gallery with wrapper class */

gsap.from('nav', {duration: 1, y:'-100%', ease:'bounce'});
gsap.from('h5', {duration: 2, y:'-100%', ease:'bounce'});
gsap.from('h1', {duration: 2, y:'-100%', ease:'bounce'});
gsap.from('.wrapper', {duration: .5, opacity: 0, stagger: .5});

/* Jquery Hover */

/* Jquery function allows me to hover over the card on the home page,
started this by grabbing the card class from bootstrap and adding a hover
and animate, the first part of the function moves the card when
the mouse hovers over, the second part of the function moves the card
when the mouse moves out */

$(document).ready(function(){

  $('.card').hover(
    function(){
      $(this).animate({
        marginTop: "-=1%",
      }, 400);
    },

    function(){
      $(this).animate({
        marginTop: "0%"
      },400);
    }
  );
});







