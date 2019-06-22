module.exports = function () {

  // begin menu
  $('#burger__input').on('click', function () {
    $('#menu, #burger').toggleClass('active');
    $('.onepage-pagination').fadeToggle();
  })
  // end menu

};