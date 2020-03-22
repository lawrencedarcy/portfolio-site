
$(document).ready(function() {

$('div.hidden').fadeIn(2000).removeClass('hidden');



window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


  if( $(window).width() < 600 ) {
   $('name').removeClass('neon');
  }


  var waypoint = new Waypoint({
    element: document.getElementById('projects'),
    handler: function() {
   
      if ($(window).width() > 600) {
      $('.hide').fadeIn(1500).removeClass('hide');
      $('.hide-img').fadeIn(1500).removeClass('.hide-img');
      }
      else {
        $('.hide').fadeIn(1500).removeClass('hide');
      }
    },
    offset: 340
  });

  var waypoint2 = new Waypoint({
    element: document.getElementById('projects2'),
    handler: function() {
    
      if ($(window).width() > 600) {
      $('.hide2').fadeIn(1500).removeClass('hide2');
      $('.hide-img2').fadeIn(1500).removeClass('.hide-img2');
      }
      else {
        $('.hide2').fadeIn(1500).removeClass('hide2');
      }
    },
    offset: 340
  });



});