const mainMenuLists = document.querySelectorAll('#gnb ul li');
const active = document.querySelector('#gnb ul li.active');

mainMenuLists.forEach(function (mainMenuList) {
  mainMenuList.addEventListener('mouseenter', function (event) {
    active.classList.remove('active');
    event.target.classList.add('active');
  });
  mainMenuList.addEventListener('mouseleave', function (event) {
    active.classList.add('active');
    event.target.classList.remove('active');
  });
});