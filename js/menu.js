$(".menu li").mouseover(function(){
    $(this).children(".sub").stop().show();
    $(this).css("color","sienna");
  });
  $(".menu li").mouseout(function(){
    $(".sub").stop().hide();
    $(this).css("color","#333");
  });

  function slide(){
    $(".slide").stop().animate({marginLeft:-1900},function(){
      $(".slide li:first").appendTo(".slide");
      $(".slide").css({marginLeft:0});
    });
  }

  function next(){
    $(".slide").stop().animate({marginLeft:-1900},function(){
      $(".slide li:first").appendTo(".slide");
      $(".slide").css({marginLeft:0});
    });
  }

  function prev(){     

    $(".slide li:last").prependTo(".slide");
    $(".slide").css({marginLeft:-1900});
    $(".slide").stop().animate({marginLeft:0});

  }

  $(".prev").click(function(){
    prev();
  });

  $(".next").click(function(){
    next();
  });

  setInterval(slide,3000);   