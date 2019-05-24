const navSlide = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector('.navlinks');

  burger.addEventListener ('click',()=>{
    nav.classlist.toggle('nav-active');
  });
}

navSlide();
