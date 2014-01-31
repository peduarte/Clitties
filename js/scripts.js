$(function () {

  var movementThreshold = 5;
  var i = 0;
  var orgasm1 = 200;
  var orgasm2 = 400;
  var climaxAchieved = false;
  var $body = $('body');
  var $clit = $('.clit');
  var $labia = $('.labia');
  var pfx = ['webkit', 'moz', 'MS', 'o', ''];
  var anim = document.getElementById('main-drop');
  var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));


  if (isTouch) {

    $(document).on('touchmove',function(event){
      event.preventDefault();

      applyTransforms(movementThreshold, i);

      i++;

    });

  }

  else {

    $body.on('mousewheel', function(event) {
      event.preventDefault();

      if (event.deltaY > movementThreshold) { event.deltaY = movementThreshold; }
      else if (event.deltaY < -movementThreshold) { event.deltaY = -movementThreshold; }

      applyTransforms(event.deltaY, i);

      i++;

    });

  }


  function applyTransforms(position, index) {
    $clit.css({
      '-webkit-transform': 'translate3d(' + getRandomInt(-position/4, position/4) + 'px, ' + getRandomInt(-position, position) + 'px, 0)',
      '-moz-transform': 'translate3d(' + getRandomInt(-position/4, position/4) + 'px, ' + getRandomInt(-position, position) + 'px, 0)',
      'transform': 'translate3d(' + getRandomInt(-position/4, position/4) + 'px, ' + getRandomInt(-position, position) + 'px, 0)'
    });

    $labia.css({
      '-webkit-transform': 'translate3d(' + getRandomInt(-position/8, position/8) + 'px, ' + getRandomInt(-position/2, position/2) + 'px, 0)',
      '-moz-transform': 'translate3d(' + getRandomInt(-position/8, position/8) + 'px, ' + getRandomInt(-position/2, position/2) + 'px, 0)',
      'transform': 'translate3d(' + getRandomInt(-position/8, position/8) + 'px, ' + getRandomInt(-position/2, position/2) + 'px, 0)'
    });

    if (index > orgasm1 && !climaxAchieved) {
      climaxAchieved = true;
      $body.addClass('orgasm--1');
    }
  }


  function climax () {
    $body.addClass('climax');
    if (isTouch) {
      $body.unmousewheel();
    }
  }

  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
      if (!pfx[p]) type = type.toLowerCase();
      element.addEventListener(pfx[p]+type, callback, false);
    }
  }

  PrefixedEvent(anim, 'AnimationEnd', function () {
    climax();
  });

});
