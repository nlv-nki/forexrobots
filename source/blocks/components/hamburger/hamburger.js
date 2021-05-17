let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector('.main-nav');

hamburger.addEventListener("click", function() {

  this.classList.toggle("is-active");

  if(this.classList.contains("is-active")){

    menu.style.display = 'block';
  }
  else {
    console.log(this.classList.contains("is-active"));
    menu.style.display = 'none';

  }
}, false);
