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