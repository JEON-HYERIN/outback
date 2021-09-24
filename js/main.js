// gnb영역 이벤트 
const mainMenuLists = document.querySelectorAll('#gnb ul li');
// const active = document.querySelector('#gnb ul li.active');

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

mainMenuLists.forEach(function (mainMenuList) {
  mainMenuList.addEventListener('mouseenter', function (event) {
    // active.classList.remove('active');
    event.target.classList.add('active');
  });
  mainMenuList.addEventListener('mouseleave', function (event) {
    // active.classList.add('active');
    event.target.classList.remove('active');
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

// 헤더영역 
const header = document.querySelector('#header');
window.addEventListener('scroll', function () {
  if(window.pageYOffset > 6) {
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



