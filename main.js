'use strict';

var toggleMenu = function (event) {
  var menu = document.getElementById('js-menu-small');
  if (menu.classList.contains('hide')) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
}
document.getElementById('js-button-burguer').addEventListener('click', toggleMenu);

var smallMenuLinkList = document.querySelectorAll('#js-menu-small li a');
for (var i = 0; i < smallMenuLinkList.length; i++) {
  smallMenuLinkList[i].addEventListener('click', toggleMenu);
}
