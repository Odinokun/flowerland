module.exports = function () {

  // begin fullPageScroll
  $("#one-page-scroll").onepage_scroll({
    easing: "ease",
    updateURL: false,
    loop: false,
    keyboard: true,
    beforeMove: function (index) {
      // change pagination color 4 light pages
      console.clear();
      var currSlide = $('.index-slider__slide--white');
      var pagination = $('.onepage-pagination');
      var mainWrap = $('#main-wrap');

      if ($(currSlide).hasClass('active')) {
        $(pagination).addClass('purple');
        $(mainWrap).addClass('purple');
      } else {
        $(pagination).removeClass('purple');
        $(mainWrap).removeClass('purple');

      }
    },
    afterMove: function (index) {
      // change pagination color 4 light pages
      console.clear();
      var currSlide = $('.index-slider__slide--white');
      var pagination = $('.onepage-pagination');
      var mainWrap = $('#main-wrap');

      if ($(currSlide).hasClass('active')) {
        $(pagination).addClass('purple');
        $(mainWrap).addClass('purple');
      } else {
        $(pagination).removeClass('purple');
        $(mainWrap).removeClass('purple');

      }
    }
  });

  $('.onepage-pagination a').on('click', function (e) {
    e.preventDefault();
  })

  // end fullPageScroll

};