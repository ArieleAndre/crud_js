function addWine() {
  var container = document.getElementsByClassName("containerCards");

  var element = document.getElementsByClassName("card");
  var content = element[0].innerHTML;
  var div = document.createElement('div');

  div.setAttribute('class', 'card');
  div.innerHTML = content;
  container[0].appendChild(div);
}

function openModal() {
  let containter = document.querySelector(".containerCards");
  
  
  document.querySelector('.modalCreate').style.opacity = 0;
  
  
  document.querySelector('.modalCreate').style.backgroundImage = 'linear-gradient(to right, #7f53ac 0, #657ced 100%)';
  document.querySelector('.modalCreate').style.transitionDuration = '1s';
  
  document.querySelector('.container2').style.transitionDuration = '1s';
  document.querySelector('.container3').style.transitionDuration = '1s';
  containter.style.transitionDuration = '1s';

  document.querySelector('.container').style.animationIterationCount = 1;
  
  if (document.querySelector('.container').style.backgroundColor == '#000') {
    document.querySelector('.container').style.animationPlayState = 'paused';
  }
  const teste = setTimeout(() => {
    document.querySelector('.container2').style.opacity = 0;
    document.querySelector('.container3').style.opacity = 0;
    containter.style.visibility = 'hidden';
    
    document.querySelector('.modalCreate').style.opacity = 1;
  }, 100);
  
  document.querySelector('.modalCreate').style.display = 'flex';
}
