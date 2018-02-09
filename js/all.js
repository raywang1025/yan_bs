$(window).scroll(function(e){
  if($(window).scrollTop()>0)
    $('nav').removeClass('navbar-top')
  else
    $('nav').addClass('navbar-top')
  var s = skrollr.init();
})