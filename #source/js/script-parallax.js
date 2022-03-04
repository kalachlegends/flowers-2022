$('.nav__logo-container').on('mousemove', (e) => {
	const x = e.pageX / $(window).width();
	const y = e.pageY / $(window).height();

	$('.layer').css(
		'transform',
		'translate3d(-' + x * 40 + 'px,-' + y * 50 + 'px, 0px)'
   // 30 - это коэфициент, задающий скорость параллакса, его можно менять
	);
});