const navSlide = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll ('.nav-links li');

  //set nav active status
  let isActive = false;
  console.log("nav-active: " + isActive)


  burger.addEventListener ('click',()=>{
      //Navigation Toggle
    nav.classList.toggle('nav-active');
    isActive = !isActive;
    console.log("nav-active : " + isActive)

    //Link Animation
    .navlinks.forEach((link, index) => {
      if (link.style.animation) {
          link.style.animation = '';
      } else {
          link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1}s';
      }
    });
  });
}

navSlide();
