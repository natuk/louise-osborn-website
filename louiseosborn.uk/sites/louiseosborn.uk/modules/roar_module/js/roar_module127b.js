(function($){
  $(document).ready(function(){

    loop(3000);
    
  });
  
  function loop(interval){
    var image = '';
    var imgId = '';
    setTimeout(function() {
      imgId = $('.roar-front-page-slide:last-child').attr('id');
      imgId = imgId.split('-');
      imgId = parseInt(imgId[4], 10) + 1;
      if (imgId == 15) { //set the max number of images here
        imgId = 0;
      }
      $.getJSON('home_next/' + imgId, function( json ) {
        image = json;
      }).done(function(){
        //$('.roar-front-page-slide:first-child').fadeOut().remove();
        $('.roar-front-page-slide:first-child').hide().remove();
        //$('.roar-front-page-slideshow').append( image ).hide().fadeIn();
        $('.roar-front-page-slideshow').append( image ).hide().show();
        if (imgId == 2) {
          loop(14000);
        } else {
          loop(3000);
        }
      }).fail(function(){
        imgId = 0;
        loop(3000);
      });
    }, interval);
  }
  
})(jQuery);
