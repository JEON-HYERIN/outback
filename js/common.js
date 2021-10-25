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
$('#gnb > ul > li > a').on('click', function () {
  var index = $('#gnb > ul > li').index($(this).parent());
  $('#gnb > ul > li').removeClass('active');
  $('#gnb > ul > li:eq(' + index + ')').toggleClass('active');
  $('#gnb > ul > li:eq(' + index + ') > .sub-menu').toggleClass('open');
  $('#gnb > ul > li:eq(' + index + ') > a > .material-icons').toggleClass('rotate');
});

// ARROW-UP 버튼 클릭시 상단이동
const arrowUpBtn = document.querySelector('#arrow-up');
const wrapper = document.querySelector('#wrapper');
arrowUpBtn.addEventListener('click', function () {
  wrapper.scrollIntoView({behavior:"smooth"});
});

// 헤더영역 
const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;
window.addEventListener('scroll', function () {
  if (window.pageYOffset > headerHeight) {
    arrowUpBtn.classList.remove('invisible');
  } else {
    arrowUpBtn.classList.add('invisible');
  }
});


