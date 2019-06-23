module.exports = function() {

  // begin Sly slider
  $('#portfolio-slider__wrap').sly({
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBy: 1,
    speed: 1000,
    elasticBounds: 1,
    dragHandle: 1,
    dynamicHandle: 1,
    pauseOnHover: 1

  });
  // end Sly slider


};