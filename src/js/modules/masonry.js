module.exports = function () {

  // begin masonry
  var $grid = $('.project-grid').imagesLoaded(function () {
    // init Masonry after all images have loaded
    $grid.masonry({
      itemSelector: '.project-grid__item'
    });
  });
  // end masonry

};