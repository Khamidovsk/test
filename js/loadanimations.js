$(function  () {
    var off = "d-none";
    var on = "animate__animated";

    setTimeout(() => {
        $('.navbar').removeClass(off);
        $('.navbar').addClass(on);
    }, 500);

     setTimeout(() => {
         $('.socials').removeClass(off);
         $('.socials').addClass(on);
     }, 1200);
      setTimeout(() => {
          $('.hometitle').removeClass(off);
          $('.hometitle').addClass(on);
      }, 2000);

       setTimeout(() => {
           $('.start').removeClass(off);
           $('.start').addClass(on);
            $('.download').removeClass(off);
            $('.download').addClass(on);
       }, 2200);

      var info = false;
      var gadgets = false;
      $(window).scroll(function () {
          var windowHeight = $(window).innerHeight();

          if (scrollY >= (windowHeight / 2) && info === false) {
              info = true;
               setTimeout(() => {
                   $('#info .secimg').removeClass(off);
                   $('#info .secimg').addClass(on);
               }, 0);

                setTimeout(() => {
                    $('.block-1').removeClass(off);
                    $('.block-1').addClass(on);
                    $('.title').removeClass(off);
                }, 500);
                setTimeout(() => {
                    $('.sultan').removeClass(off);
                    $('.sultan').addClass(on);
                }, 800);
                  setTimeout(() => {
                    $('.after-text').removeClass(off);
                    $('.after-text').addClass(on);
                  }, 1000);
              
              
              
              
              
              
              
          } 
            if (scrollY >= (windowHeight * 1.5) && gadgets === false) {
                gadgets = true;
                setTimeout(() => {
                   $('#gadgets .secimg').removeClass(off);
                   $('#gadgets .secimg').addClass(on);
                }, 0);

                setTimeout(() => {
                      $('.rawname').removeClass(off);
                      $('.rawname').addClass(on);
                }, 500);
                setTimeout(() => {
                     $('.cast').removeClass(off);
                     $('.cast').addClass(on);
                }, 1000);


                setTimeout(() => {
                     $('.pulsefire').removeClass(off);
                     $('.pulsefire').addClass(on);
                   
                }, 1500);
                 setTimeout(() => {
                     $('.fury').removeClass(off);
                     $('.fury').addClass(on);

                 }, 2000);

                   setTimeout(() => {
                       $('.core').removeClass(off);
                       $('.core').addClass(on);

                   }, 2500);

                     setTimeout(() => {
                         $('.core').removeClass(on);
                     $('.fury').removeClass(on);
                     $('.pulsefire').removeClass(on);
                     $('.cast').removeClass(on);



                        
                     }, 4500);







            }
      });
})