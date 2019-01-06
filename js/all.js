$(document).ready(function(){
  
  $(window).scroll(function(e){
    if($(window).scrollTop()>0)
      $('nav').removeClass('navbar-top')
    else
      $('nav').addClass('navbar-top')
    var s = skrollr.init();
  })

  $("#scrollToAbout").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 2000);
  });

  $("#scrollToPersist").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#persist').offset().top
    }, 2000);
  });

  $("#scrollToProduct").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#product').offset().top
    }, 2000);
  });

  $("#scrollToLocation").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#location').offset().top
    }, 2000);
  });    

  window.addEventListener("load", function(event) {
    var seeLocation = document.querySelector('.where');
    seeLocation.addEventListener('click',function(e){
      e.preventDefault();
      mixpanel.track("seeLocation");
      alert('想看在哪裡');
    });
 });   
});
