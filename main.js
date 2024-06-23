window.onscroll = function () {
  stickyNav();
};

const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function stickyNav() {
  if (window.scrollY >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
