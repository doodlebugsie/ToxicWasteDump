const navSlide = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector('.navlinks');
  const navlinks = document.querySelectorAll ('.navlinks li');
  //Navigation Toggle

  burger.addEventListener ('click',()=>{
    nav.classlist.toggle('nav-active');
  });
  //Link Animation
  .navlinks.forEach((link, index) => {
    link.style.animation = 'navLinkFade 0.5s ease forwards %{index / 7}'
    console.log(index/7);

  });
}

navSlide();
