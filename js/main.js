/**
 * Created by Yura on 02.10.17.
 */
"use strict";

//var topMenu = document.querySelector('#menu');
var toggleMenu = document.querySelector('.menu-toggle');
var mainMenu = document.querySelector('.main-menu');
var window_wight = window.innerWidth;


var openMainMenu = (function () {
  toggleMenu.addEventListener('click', function () {
    if (mainMenu.classList.contains('hidden')) {
      mainMenu.classList.remove('hidden');
      document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
          mainMenu.classList.add('hidden');
        }
      });
    } else {
      mainMenu.addEventListener('click', function () {
        mainMenu.classList.add('hidden');
      });
      mainMenu.classList.add('hidden');
    }
  });
})();

var slider_left = document.getElementById('slider-left');
var slider_items = document.getElementById('slider_items');
var left = 0;

var banner = function () {

  window_wight = window.innerWidth;
  var delta = 280;
  if (window_wight > 400) {
    delta = 320;
  }
  left = left - delta;
  if (left < -(delta * 2) || left == -600) {
    left = 0;
  }

  slider_items.style.left = left +'px';

};

var slider = (function () {
  slider_left.addEventListener('click', function () {
    banner();
  });
})();




/*

document.getElementById('slider-left').onclick = slider_left;
document.getElementById('slider-right').onclick = slider_left;
var left = 0;

function slider_left(){
  var slider_items = document.getElementById('slider_items');

  left = left - 280;
  if (left < -560) {
    left = 0;
  }
  slider_items.style.left = left +'px';
}
*/

/*var h_nav = 320; // высота шапки
var h_mrgNav = 0;    // отступ когда шапка уже не видна
$(function(){

  var elem = $('#top_nav');
  var top = $(this).scrollTop();

  if(top > h_nav){
    elem.css('top', h_mrgNav);
  }

  $(window).scroll(function(){
    top = $(this).scrollTop();

    if (top+h_mrg < h_nav) {
      elem.css('top', (h_nav-top));
    } else {
      elem.css('top', h_mrgNav);
    }
  });

});*/

