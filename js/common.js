'use strict';

$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const body = document.querySelector('body');
var scrollPosition = 0;
// 모달창 열기
function enable() {
  scrollPosition = window.pageYOffset;
  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.top = `-${scrollPosition}px`;
  body.style.width = '100%';
}
// 모달창 닫기
function disable() {
  body.style.removeProperty('overflow');
  body.style.removeProperty('position');
  body.style.removeProperty('top');
  body.style.removeProperty('width');
  window.scrollTo(0, scrollPosition);
}

// 헤더영역 
const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;
window.addEventListener('scroll', function () {
  if (window.pageYOffset > headerHeight) {
    toTopBtn.classList.remove('invisible');
  } else {
    toTopBtn.classList.add('invisible');
  }
});

// gnb영역 이벤트 
const mainMenu = document.querySelector('#gnb > ul');
const subMenues = mainMenu.querySelectorAll('.sub-menu');
const mainMenuLists = document.querySelectorAll('#gnb > ul > li');
const anchers = document.querySelectorAll('#gnb > ul > li > a');
const icons = mainMenu.querySelectorAll('span.material-icons');

$('#gnb > ul > li > a').on('mouseenter focusin', function () {
  if ($(window).width() >= 1024) {
    var index = $('#gnb > ul > li').index($(this).parent());
    $('#gnb > ul > li > .sub-menu').removeClass('on');
    $('#gnb > ul > li:eq(' + index + ') > .sub-menu').addClass('on');
  }
});

$('#header').on('mouseleave', function () {
  $('#gnb > ul > li > .sub-menu').removeClass('on');
});

// 모바일버전 서브메뉴 오픈
$('#gnb > ul > li').each(function () {
  if ($(this).find('ul').length > 0) {
    $(this).find('> a').append('<span class="material-icons mobile" data-name="brand">navigate_next</span>');
  }
});

$('#header .open-btn').on('click', function () {
  $('#header .open-btn').addClass('hidden');
  $('#header .close-btn').removeClass('hidden');
  $('#gnb > ul > li.active > a').trigger('click');
  enable();
});

$('#header .close-btn').on('click', function () {
  $('#header .open-btn').removeClass('hidden');
  $('#header .close-btn').addClass('hidden');
  disable();
});

$('#gnb > ul > li > a').on('click focusin', function (e) {
  if ($(window).width() < 1024) {
    if ($(this).parent().find('ul').length > 0) {
      e.preventDefault();
      var height = 0;
      $(this).next().find('> li').each(function () {
        height += $(this).outerHeight(true);
      });
      $(this).next().css({'height': height + 'px'});
      $(this).find('span.material-icons').addClass('rotate');
      $(this).parent().siblings().find('ul').css({'height': '0px'});
      $(this).parent().siblings().find('span.material-icons').removeClass('rotate');
    }
  }
});

$(window).on('resize', function () {
  if ($(window).width() >= 1024) {
    $('#gnb > ul > li > ul').removeAttr('style');
    if ($('#gnb').hasClass('open') === true) {
      disable();
    } 
  } else if ($('#gnb').hasClass('open') === true){
    $('#header .open-btn').trigger('click');
  }
});

// TO-TOP 버튼 클릭시 상단이동
const toTopBtn = document.querySelector('#to-top');
const wrapper = document.querySelector('#wrapper');
toTopBtn.addEventListener('click', function () {
  wrapper.scrollIntoView({behavior:"smooth"});
});




