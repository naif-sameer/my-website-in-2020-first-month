let navLinks = document.querySelector(".nav-links"),

    hideNavBtn = document.querySelector(".nav-links button"),

    showNavLinks = document.querySelector(".nav-berger");

showNavLinks.onclick = function(){

  if(navLinks.classList.contains("is-hide") === true){

    navLinks.classList.remove("is-hide");

  }else{

    navLinks.classList.add("is-hide");
  }
}
hideNavBtn.onclick = function(){

  this.parentElement.classList.add("is-hide")

}
