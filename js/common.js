'use strict';

$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// gnb영역 이벤트 
const mainMenu = document.querySelector('#gnb > ul');
const subMenues = mainMenu.querySelectorAll('.sub-menu');
const mainMenuLists = document.querySelectorAll('#gnb > ul > li');
const anchers = document.querySelectorAll('#gnb > ul > li > a');
const icons = mainMenu.querySelectorAll('span.material-icons');

$('#gnb > ul > li > a').on('mouseenter focusin', function () {
  var index = $('#gnb > ul > li').index($(this).parent());
  $('#gnb > ul > li > .sub-menu').removeClass('on');
  $('#gnb > ul > li:eq(' + index + ') > .sub-menu').addClass('on');
});

$('#header').on('mouseleave', function () {
  $('#gnb > ul > li > .sub-menu').removeClass('on');
});

// 모바일버전 서브메뉴 오픈
// $('#gnb > ul > li > a').on('click', function () {
//   var index = $('#gnb > ul > li').index($(this).parent());
//   $('#gnb > ul > li').removeClass('active');
//   $('#gnb > ul > li:eq(' + index + ')').toggleClass('active');
//   $('#gnb > ul > li:eq(' + index + ') > .sub-menu').toggleClass('open');
//   $('#gnb > ul > li:eq(' + index + ') > a > .material-icons').toggleClass('rotate');
// });

$('#gnb > ul > li').each(function () {
  if ($(this).find('ul').length > 0) {
    $(this).find('> a').append('<span class="material-icons mobile" data-name="brand">navigate_next</span>');
  }
});

$('#header .open-btn').on('click', function () {
  $('#header .open-btn').addClass('hidden');
  $('#header .close-btn').removeClass('hidden');
  $('#gnb > ul > li.active > a').trigger('click');
});

$('#gnb > ul > li > a').on('click', function (e) {
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
  } else {
    $('#gnb > ul > li.active > a').trigger('click');
  }
});

// TO-TOP 버튼 클릭시 상단이동
const toTopBtn = document.querySelector('#to-top');
const wrapper = document.querySelector('#wrapper');
toTopBtn.addEventListener('click', function () {
  wrapper.scrollIntoView({behavior:"smooth"});
});

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


