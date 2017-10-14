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

var translateHeader= function(lang){
  if (lang === 'en'){
    $('#h-title').html('Digital Growth,<br>Technology<br>& Design');
    $('#h-subtitle').html('We Make an Integral Growth for Your Brand');
    $('#h-services').html('Services');
    $('#h-quote').html('Get free Quote');

  } else if (lang === 'es'){
    $('#h-title').html('Crecimiento Digital,<br>Tecnología<br>y Diseño');
    $('#h-subtitle').html('Hacemos Crecer Tu Marca de Forma Integral.');
    $('#h-services').html('Servicios');
    $('#h-quote').html('Pedir Presupuesto');
  }
}


var goTop = function () {
  //empty
}