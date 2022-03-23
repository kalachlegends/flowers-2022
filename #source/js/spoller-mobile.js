$(document).ready(function() {
 $('.mobile__item-triger').click(function(){ //при клике на бургер что дожно происхоидть
 	 if ($('.mobile__list').hasClass('one')) {
 	 	$('.mobile__item-triger').not($(this)).removeClass('active-mobile-sub-menu')
 	 	$('.mobile__sub-menu').not($(this).next()).slideUp()
 	 }
 	$(this).toggleClass('active-mobile-sub-menu').next('.mobile__sub-menu').slideToggle();//когда человек будет нажажимать элемент с классом mobile__item-triger будет появляться элемент с классом mobile__sub-menu
 
 });
});
$(document).ready(function() {
 $('.item-triger').click(function(){ //при клике на бургер что дожно происхоидть
 	 if ($('footer__body').hasClass('one')) {
 	 	$('.item-triger').not($(this)).removeClass('active-mobile-sub-menu')
 	 	$('.footer__list').not($(this).next()).slideUp()
 	 }
 	$(this).toggleClass('active-sub-menu').next('.footer__list').slideToggle();//когда человек будет нажажимать элемент с классом mobile__item-triger будет появляться элемент с классом mobile__sub-menu
 
 });
});

