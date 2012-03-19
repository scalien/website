
$(document).ready(function() {
	init_menu();

  var options = {
    success:  showResponse  // post-submit callback 
  }; 

  // bind form using 'ajaxForm' 
  $('.contact form').ajaxForm(options); 

  $('.contact form a').click(function() {
    $('.contact form').submit();
  });
}); 

var menuSlideUp = function() {
  if($(this).find('.submenu').length > 0) {
    $(this).find('.submenu').slideUp('fast', (function(that) {
      setTimeout(function() {
          $(that).removeClass('hover');
      }, 205);
    })(this));     
  } else {
    $(this).removeClass('hover')
  }
}

var menuSlideDown = function() {
  $(this).addClass('hover');
  if($(this).find('.submenu').length > 0) {
    $(this).parents('.item').addClass('hover');
    $(this).find('.submenu').slideDown('fast');
  }
}

function init_menu()
{
  var config = {    
     over: menuSlideDown,
     timeout: 40, 
     out: menuSlideUp 
  };
	$('nav#mainmenu li.item').hoverIntent(config);
}

function showResponse(responseText, statusText, xhr, $form) {
  if(responseText!="Sent") {
    alert(responseText);
  } else {
    alert("Message sent. Thank you!");
  }
}
