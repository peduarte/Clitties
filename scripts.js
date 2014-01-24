$(function () {

	var movementThreshold = 5;
	var i = 0;
	var orgasm1 = 200;
	var orgasm2 = 400;
	var orgasm3 = 600;
	var $body = $('body');
	var $pussy = $('.pussy');

	$body.on('mousewheel', function(event) {

    if (event.deltaY > movementThreshold) { event.deltaY = movementThreshold; }
    else if (event.deltaY < -movementThreshold) { event.deltaY = -movementThreshold; }

    console.log('event.deltaY -> ', event.deltaY);

    $pussy.css({
      '-webkit-transform': 'translate3d(' + getRandomInt(-event.deltaY/4, event.deltaY/4) + 'px, ' + getRandomInt(-event.deltaY, event.deltaY) + 'px, 0)'
    });

    if (i > orgasm1) { $pussy.addClass('orgasm--1'); }
    if (i > orgasm2) { $pussy.addClass('orgasm--2'); }
    if (i > orgasm3) { climax(); }

    i++;

	});

	function climax () {
    $body.addClass('climax');
    $body.unmousewheel();
	}

	function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

});