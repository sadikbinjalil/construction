(function ($) {
    "use strict";




// sticky header
$(function(){
 var shrinkHeader = 10;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.header').addClass('shrink');
        }
        else {
            $('.header').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});



// counter
var a = 0;
$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },{
          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
    a = 1;
  }
});


// owl-carousel
$('.tastimonial_slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



// wow js
new WOW().init();
 




// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});

// Ignore this
// This is just for content manipulation
var skeleton = '<div class="skeleton"><div class="skeleton-wrapper"><div class="skeleton-wrapper-inner"><div class="skeleton-wrapper-body"><div class="skeleton-avatar"></div><div class="skeleton-author"></div><div class="skeleton-label"></div><div class="skeleton-content-1"></div><div class="skeleton-content-2"></div><div class="skeleton-content-3"></div></div></div></div></div>';
for(var i=0;i<10;i++){
  $('#content').append(skeleton); 
}

// Add waves effect
Waves.attach('button.back-to-top', 'waves-effect');
Waves.init();

$(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("nav").addClass("small");
    } else {
        $("nav").removeClass("small");
    }
});





}(jQuery));