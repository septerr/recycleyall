
function goToNextSlide(event){
   event.stopPropagation();
   var num = parseInt($(this).attr("id").substring(6));
   var nextNum = num + 1;
   var $nextSlide = $('#slide-' + nextNum);
   if($nextSlide.length > 0){
       $('html,body').animate({scrollTop: $nextSlide.offset().top -25},'slow');
   }
}

$(function(){
    $('.slide').click(goToNextSlide);
});