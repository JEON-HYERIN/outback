// gnb영역 이벤트 
const mainMenu = document.querySelector('#gnb > ul');
const subMenues = mainMenu.querySelectorAll('.sub-menu');
const mainMenuLists = document.querySelectorAll('#gnb > ul > li');
const anchers = document.querySelectorAll('#gnb > ul > li > a');
const icons = mainMenu.querySelectorAll('span.material-icons');

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// 모바일버전 서브메뉴 오픈
// mainMenu.addEventListener('click', function (event) {

//   mainMenuLists.forEach(function (event) {
//     // console.log(event.target)
//   });
//   subMenues.forEach(function (subMenu) {
//     // console.dir(event.target)
//     const link = event.target.dataset.link || event.target.parentElement.dataset.link;
//     if ((link === subMenu.dataset.filter)) {
//       if (event.target.localName === 'li') {
//         event.target.classList.toggle('active');
//       } else if (event.target.localName === 'a') {
//         event.target.parentElement.classList.add('active');
//       }

//       subMenu.classList.toggle('open');

//       icons.forEach(function (icon) {
//         if (subMenu.dataset.filter === icon.dataset.name) {
//           icon.classList.toggle('rotate');
//         }
//       });
//     } else {
//       return;
//     }
//   });
// });


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

// 토글버튼 활성화
// const openBtn = document.querySelector('.open-btn');
// const closeBtn = document.querySelector('.close-btn');
// const gnbEl = document.querySelector('#gnb');
// const topMenu = document.querySelector('#header .top-menu');

// openBtn.addEventListener('click', function () {
//   header.classList.add('black');
//   header.classList.remove('red');
//   gnbEl.classList.add('open');
//   topMenu.classList.add('open');
//   openBtn.classList.add('hidden');
//   closeBtn.classList.remove('hidden');
// });

// closeBtn.addEventListener('click', function () {
//   header.classList.remove('black');
//   gnbEl.classList.remove('open');
//   topMenu.classList.remove('open');
//   openBtn.classList.remove('hidden');
//   closeBtn.classList.add('hidden');
// });

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


