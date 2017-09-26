(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

})(jQuery); // End of use strict


(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()


var call2action = function () {
  (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
}

var translateHeader= function(lang){
  if (lang === 'en'){
    $('#h-title').html('english ,<br>english<br>english');
  } else if (lang === 'es'){
    $('#h-title').html('Crecimiento Digital,<br>Tecnología<br>y Diseño');
  }
}

var anima = function () {
        $('.AnimateRight, .AnimateLeft2, .AnimateRight2, .AnimateLeft3, .gdd-start-now').css('visibility', 'hidden')
        $('.animate-text').hide()
        var options = [
          {
            selector: '.AnimateLeft',
            offset: 200,
            callback: function (el) {
              $(el).children('.animate-text').fadeIn(2000)
              $(el).children('div').children('img').addClass('animation-left')
            }
          },
          {
            selector: '.AnimateRight',
            offset: 200,
            callback: function (el) {
              $(el).css('visibility', 'visible')
              $(el).children('.animate-text').fadeIn(2000)
              $(el).children('div').children('img').addClass('animation-right')
            }
          },
          {
            selector: '.AnimateLeft2',
            offset: 200,
            callback: function (el) {
              $(el).css('visibility', 'visible')
              $(el).children('.animate-text').fadeIn(2000)
              $(el).children('div').children('img').addClass('animation-left')
            }
          },
          {
            selector: '.AnimateRight2',
            offset: 200,
            callback: function (el) {
              $(el).css('visibility', 'visible')
              $(el).children('.animate-text').fadeIn(2000)
              $(el).children('div').children('img').addClass('animation-right')
            }
          },
          {
            selector: '.AnimateLeft3',
            offset: 200,
            callback: function (el) {
              $(el).css('visibility', 'visible')
              $(el).children('.animate-text').fadeIn(2000)
              $(el).children('div').children('img').addClass('animation-left')
            }
          },
          {
            selector: '.gdd-start-now',
            offset: 200,
            callback: function (el) {
              $(el).css('visibility', 'visible')
              $(el).children('a').addClass('animate-plan')
            }
          }
        ]
        window.Materialize.scrollFire(options)
      }