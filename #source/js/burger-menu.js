$(document).ready(function() {
 $('.nav__burger,.close').click(function(event){ //при клике на бургер что дожно происхоидть
 	$('.nav__burger,.mobile,.close').toggleClass('active');//когда человек будет нажажимать на бургер будет добавляться класс active
 	$('body').toggleClass('lock');
 });
});
