$(document).ready(function(){
  rotatePics(1);
});

function rotatePics(currentPhoto) {
  var numberOfPhotos = $('#slika img').length;
  currentPhoto = currentPhoto % numberOfPhotos;
	
  $('#slika img').eq(currentPhoto).fadeOut(function() {
		// re-order the z-index
    $('#slika img').each(function(i) {
      $(this).css(
        'zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos
      );
    });
    $(this).show();
    setTimeout(function() {rotatePics(++currentPhoto);}, 3000);
  });
}
