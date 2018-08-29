const hamburgerMenuOpen = () => {
  let hamburger = document.getElementsByClassName("hamburger");

  if (hamburger[0].classList.contains('is-active')) {
    hamburger[0].classList.remove('is-active');
  } else {
    hamburger[0].classList.add('is-active');
  }
}

window.hamburgerMenuOpen = hamburgerMenuOpen;