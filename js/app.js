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
})


