$(function(){

  $(window).scroll(() => {
    var rect = document.getElementById('showcase').getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    // if ($(window).scrollTop() > 500) {
    if ($(window).scrollTop() > rect.top && $(window).scrollTop() < rect.bottom) {

      $("#navbar").removeClass("nav-scroll");
    } else {
      $("#navbar").addClass("nav-scroll");
    }
  });

});