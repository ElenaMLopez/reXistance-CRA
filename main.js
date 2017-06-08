'use strict';

var footerHeight = document.getElementById('js-footer').scrollHeight;
var navHeight = document.getElementById('js-nav').scrollHeight;
var stopScroll = document.body.scrollHeight - footerHeight - navHeight ;
var last_known_scroll_position;

window.addEventListener('scroll', function() {
  last_known_scroll_position = window.scrollY;
  if (last_known_scroll_position + navHeight >= stopScroll) {
    document.getElementById('js-column-transparent').style.position = 'relative';
    document.getElementById('js-nav').style.position = 'absolute';
    document.getElementById('js-nav').style.bottom = 0;
  }else {
    document.getElementById('js-column-transparent').style.position = '';
    document.getElementById('js-nav').style.bottom = '';
    document.getElementById('js-nav').style.position = 'fixed';
  }
});

var toggleMenu = function () {
  var menu = document.getElementById('js-menu-small');
  if (menu.classList.contains('hide')) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
};
document.getElementById('js-button-burguer').addEventListener('click', toggleMenu);

var smallMenuLinkList = document.querySelectorAll('#js-menu-small li a');
for (var i = 0; i < smallMenuLinkList.length; i++) {
  smallMenuLinkList[i].addEventListener('click', toggleMenu);
}


var map = document.getElementById('completeMap');
var modalInformation = document.getElementById('modal');
var buttonClose = document.getElementsByClassName('closeModal')[0];
var divInformation = document.getElementsByClassName('information')[0];
var data = {
  avila:{
    schools: 5,
    students: 180
  },
  burgos:{
    schools: 15,
    students: 1280,
    data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  leon:{
    schools: 548,
    students: 150,
    data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  palencia:{
    schools: 125,
    students: 10,
    data: 'Lorem ipsum dolor sit amet, cod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  salamanca:{
    schools: 8,
    students: 5458,
    data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  segovia:{
    schools: 5,
    students: 180,
    data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  soria:{
    schools: 5,
    students: 180,
    data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  valladolid:{
    schools: 5,
    students: 180
  },
  zamora:{
    schools: 5,
    students: 180
  },
  caceres:{
    schools: 5,
    students: 180
  },
  badajoz:{
    schools: 5,
    students: 180
  },
  albacete:{
    schools: 5,
    students: 180
  },
  ciudad_real:{
    schools: 5,
    students: 180,
    data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  cuenca:{
    schools: 5,
    students: 180
  },
  guadalajara:{
    schools: 5,
    students: 180
  },
  toledo:{
    schools: 5,
    students: 180
  },
  huesca:{
    schools: 5,
    students: 180
  },
  teruel:{
    schools: 5,
    students: 180
  },
  zaragoza:{
    schools: 5,
    students: 180
  }
}
var mobileWidth=760;


map.addEventListener('click', managerClick);
buttonClose.addEventListener('click', hideModal);


function managerClick(event){
  if(modalInformation.classList.contains('animationModal')){
    hideModal();
    setTimeout(
      function(){
        mostrarModal(event)
      },
        1000);
  }else {
    mostrarModal(event);
  }
}

function mostrarModal(event){
  var cityName;
  var position;
  if(event.target.nodeName ==="path"){
    cityName = event.target.id;
  }else if(event.target.nodeName ==="text"){
    cityName = event.target.innerHTML.toLowerCase();
  }
  if(cityName && cityName != "madrid"){
    if(!modalInformation.classList.contains('animationModal')){
      modalInformation.classList.remove('hide');
      if(window.innerWidth>mobileWidth){
        position=getPosition(event);
        modalInformation.setAttribute('style', position);
        setTimeout(function(){ modalInformation.classList.add('animationModal') }, 100);
      }
    }
    if(cityName === "ciudad real"){
      cityName = "ciudad_real";
    }
    fillModalInformation(cityName);
  }
}

function hideModal(){
  if(window.innerWidth>mobileWidth){
    modalInformation.classList.remove('animationModal');
    setTimeout(function(){ modalInformation.classList.add('hide') }, 1000);
  }else{
    modalInformation.classList.add('hide');
  }
}

function fillModalInformation(cityName){
  divInformation.children[0].innerText = cityName=="ciudad_real"?"ciudad real":cityName;
  divInformation.children[1].innerText = "Colegios: "+data[cityName].schools;
  divInformation.children[2].innerText = "Alumnos: "+data[cityName].students;
  divInformation.children[3].innerText = data[cityName].data;
}

function getPosition(event){
  var x, y;
  if(event.clientX-160>10 && event.clientX-160<completeMap.getBoundingClientRect().width-330){
    x= event.clientX-160;
  }else{
    x= event.clientX-160<10?10:completeMap.getBoundingClientRect().width-330;
  }
  if(event.clientY-120>10 && event.clientY-120<completeMap.getBoundingClientRect().height-250){
    y= event.clientY-120;
  }else{
    y= event.clientY-120<10?10:completeMap.getBoundingClientRect().height-250;
  }
  return 'left: '+x+'px;'+'top: '+y+'px;';
}
    // MORE button
var viewArticle2 = document.getElementById('view-article2');
var closeArticle2 = document.getElementById('closeArticle2');

viewArticle2.addEventListener('click', function(){
  document.getElementById('moreArticle2').style.display = 'inline';
  viewArticle2.style.display ='none';
});
closeArticle2.addEventListener('click', function(){
  document.getElementById('moreArticle2').style.display = 'none';
  viewArticle2.style.display = 'inline';
});

var viewArticle3 = document.getElementById('view-article3');
var closeArticle3 = document.getElementById('closeArticle3');

viewArticle3.addEventListener('click', function(){
  document.getElementById('moreArticle3').style.display = 'inline';
  viewArticle3.style.display = 'none';
});
closeArticle3.addEventListener('click', function(){
  document.getElementById('moreArticle3').style.display = 'none';
  viewArticle3.style.display = 'inline';
});
