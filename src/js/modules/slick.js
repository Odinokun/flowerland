module.exports = function() {

  // begin Slick slider
  $('#reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '20px',
    asNavFor: '#reviews-slider-thumb',
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          fade: true
        }
      }
    ]
  });
  $('#reviews-slider-thumb').slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '#reviews-slider',
    focusOnSelect: true,
    dots: true
  });
  // end Slick slider

};