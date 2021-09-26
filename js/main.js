// gnb영역 이벤트 
const mainMenu = document.querySelector('#gnb > ul');
const subMenues = mainMenu.querySelectorAll('.sub-menu');
const mainMenuLists = document.querySelectorAll('#gnb > ul > li');
const icon = mainMenu.querySelector('span.material-icons');
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

mainMenuLists.forEach(function (mainMenuList) {
  mainMenuList.addEventListener('mouseenter', function (event) {
    event.target.classList.add('active');
  });
  mainMenuList.addEventListener('mouseleave', function (event) {
    event.target.classList.remove('active');
  });
});

// 모바일버전 서브메뉴 오픈
mainMenu.addEventListener('click', function (event) {
  subMenues.forEach(function (subMenu) {
    if (event.target.dataset.link === subMenu.dataset.filter) {
      subMenu.classList.toggle('open');
      icon.classList.toggle('rotate');
      if (subMenu.classList.contains('open')) {
        gsap.to(subMenu, .2, {
          opacity: 1,
          display: 'block',
        });
      } else {
        gsap.to(subMenu, .2, {
          opacity: 0,
          display: 'none'
        });
      }
    } else {
      return;
    }
  });
});

// ARROW-UP 버튼 클릭시 상단이동
const visual = document.querySelector('#visual');
const visualHeight = visual.getBoundingClientRect().height;
const arrowUpBtn = document.querySelector('#arrow-up');
const wrapper = document.querySelector('#wrapper');
arrowUpBtn.addEventListener('click', function () {
  wrapper.scrollIntoView({behavior:"smooth"});
});

// 토글버튼 활성화
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const gnbEl = document.querySelector('#gnb');
const topMenu = document.querySelector('#header .top-menu');

openBtn.addEventListener('click', function () {
  header.classList.remove('red');
  gnbEl.classList.add('open');
  topMenu.classList.add('open');
  openBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {
  gnbEl.classList.remove('open');
  topMenu.classList.remove('open');
  openBtn.classList.remove('hidden');
  closeBtn.classList.add('hidden');
});

// 헤더영역 
const header = document.querySelector('#header');
window.addEventListener('scroll', function () {
  if(window.pageYOffset > 1 && closeBtn.classList.contains('hidden')) {
    header.classList.add('red');
  } else {
    header.classList.remove('red');
  };

  if(window.pageYOffset > visualHeight / 2) {
    arrowUpBtn.classList.remove('invisible');
  } else {
    arrowUpBtn.classList.add('invisible');
  }
});


