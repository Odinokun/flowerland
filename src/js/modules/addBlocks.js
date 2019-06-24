module.exports = function () {

  // begin addBlocks
  var hideBlocks = $(".project-grid .project-grid__item--hide:hidden").length;
  if (hideBlocks < 1) {
    $('#addBlocks').fadeOut(0);
  }

  $("#addBlocks").on("click", function () {

    //добавляем блоки
    $(".project-grid").find(".project-grid__item--hide:hidden:lt(6)").fadeIn();

    //обновляем сетку masonry
    $('.project-grid').masonry({
      itemSelector: '.project-grid__item'
    });

    //смотрим сколько скрытых блоков осталось
    var hideBlocks = $(".project-grid .project-grid__item--hide:hidden").length;

    if (hideBlocks < 1) {
      $('#addBlocks').fadeOut();
    }

  });
  // end addBlocks

};