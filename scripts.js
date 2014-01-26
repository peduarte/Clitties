$(function () {

  var movementThreshold = 5;
  var i = 0;
  var orgasm1 = 200;
  var orgasm2 = 400;
  var climaxAchieved = false;
  var $body = $('body');
  var $clit = $('.clit');
  var $labia = $('.labia');

  $body.on('mousewheel', function(event) {

    if (event.deltaY > movementThreshold) { event.deltaY = movementThreshold; }
    else if (event.deltaY < -movementThreshold) { event.deltaY = -movementThreshold; }

    $clit.css({
      '-webkit-transform': 'translate3d(' + getRandomInt(-event.deltaY/4, event.deltaY/4) + 'px, ' + getRandomInt(-event.deltaY, event.deltaY) + 'px, 0)'
    });

    $labia.css({
      '-webkit-transform': 'translate3d(' + getRandomInt(-event.deltaY/8, event.deltaY/8) + 'px, ' + getRandomInt(-event.deltaY/2, event.deltaY/2) + 'px, 0)'
    });

    if (i > orgasm1 && !climaxAchieved) {
      climaxAchieved = true;
      $body.addClass('orgasm--1');
    }


    i++;

  });

  function climax () {
    $body.addClass('climax');
    $body.unmousewheel();
  }

  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var pfx = ['webkit', 'moz', 'MS', 'o', ''];
  function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
      if (!pfx[p]) type = type.toLowerCase();
      element.addEventListener(pfx[p]+type, callback, false);
    }
  }

  var anim = document.getElementById('main-drop');
  PrefixedEvent(anim, 'AnimationEnd', function () {
    climax();
  });

});
