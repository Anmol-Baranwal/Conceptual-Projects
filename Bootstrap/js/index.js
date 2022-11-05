
// -------------------------------------------------------------------------------------------------------------
//                                             SERVICES
// -------------------------------------------------------------------------------------------------------------


$(function(){
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();  
    $('.tabs a').click(function(e){
      e.preventDefault();
      var $this = $(this),
          tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
          others = $this.closest('li').siblings().children('a'),
          target = $this.attr('href');
      others.removeClass('active');
      $this.addClass('active');
      $(tabgroup).children('div').hide();
      $(target).show();

      // Scroll to tab content (for mobile)
      if($(window).width() < 992) {
          $('html, body').animate({
              scrollTop: $("#first-tab-group").offset().top
          }, 200);    
      }              
    })  
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// -------------------------------------------------------------------------------------------------------------
//                                             SMOOTH SCROLLBAR
// -------------------------------------------------------------------------------------------------------------

$(function() {
    $('.navbar a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 800);
      event.preventDefault();
    });
  });    

  
  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

  $(function(){
  AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
  });
});


// $("html").on("contextmenu",function(e){
//     return false;
//  });




// $(window).scroll(function() {
//   if ($(document).scrollTop() > 150) {        for shrinking navbar by adding corresponsing classes
//     $('nav').addClass('shrink');
//     $('.add').hide();
//   } else {
//     $('nav').removeClass('shrink');
//     $('.add').show();
    
//   }
// });






