

$(document).ready(function(){
 $('.slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
   autoplay:true,
        autoplaySpeed:1000,
        pauseOnHover:true,
        infinite:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:true,
        infinite:true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
          autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:true,
        infinite:true
      }
    }
  ]
})

$('.health-test').slick({
  infinite: true,
  speed: 500,
  cssEase: 'linear',
  arrow:true
});


	
});
