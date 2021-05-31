
  $(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);    
  });


  $(".navbar-toggler").click(function(){
  $("nav").toggleClass("navbar-yellow");
  });
