const navSlide = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll ('.nav-links li');
  //Navigation Toggle

  burger.addEventListener ('click',()=>{
    nav.classList.toggle('nav-active');
  });
  //Link Animation
  .navlinks.forEach((link, index) => {
    link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}s';
    console.log(index/7);
  });
}

navSlide();
