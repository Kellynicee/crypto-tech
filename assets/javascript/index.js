function toggleNav() {
  const sidenav = document.getElementById('mySidenav');
  const originalNav = document.querySelector('.original-nav ul');

  if (sidenav.classList.contains('open')) {
    sidenav.classList.remove('open');
  } else {
    sidenav.classList.add('open');
  }
}
