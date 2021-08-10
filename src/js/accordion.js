// accordion with closing another tab ---------------------------------------------------


$('.accordion__tab').click(function () {
  $(this).toggleClass('accordion__tab--is-active').next().slideToggle(500);
  $('.accordion__tab').not(this).removeClass('accordion__tab--is-active').next().slideUp(500);
});