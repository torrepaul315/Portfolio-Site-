$(document).ready(function(){
	// AOS.init({ disable: 'mobile' });




});


// $( ".pReddit" ).click(function() {
//   window.location.href="https://paul-rclone.herokuapp.com/";
// });


// $( ".alumnize" ).click(function() {
//   window.location.href="https://alumnize-9cdd1.firebaseapp.com/#/";
// });


// $( ".gBlog" ).click(function() {
//
//   window.location.href="https://torresblog.herokuapp.com/";
// });

$(".projNav").click(function() {
    $('html,body').animate({
        scrollTop: $(".projBanner").offset().top},
        'slow');
});

$(".aboutNav").click(function() {
    $('html,body').animate({
        scrollTop: $(".aboutBanner").offset().top},
        'slow');
});

$(".connectNav").click(function() {
    $('html,body').animate({
        scrollTop: $(".connectBanner").offset().top},
        'slow');
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
