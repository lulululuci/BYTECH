function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}

function toggleSubmenu(id, toggleId) {
  const submenu = document.getElementById(id);
  const toggleLink = document.getElementById(toggleId);

  submenu.classList.toggle('show');

  if (submenu.classList.contains('show')) {
    toggleLink.innerHTML = toggleLink.innerHTML.replace('▾','▴');
  } else {
    toggleLink.innerHTML = toggleLink.innerHTML.replace('▴','▾');
  }
}

function mostrar(seccion) {
  document.querySelectorAll('section').forEach(s =>
    s.classList.add('hidden')
  );
  document.getElementById(seccion).classList.remove('hidden');
  document.getElementById('menu').classList.remove('show');
}

function contactar() {
  window.open('https://wa.me/5491124844473','_blank');
}

function instagram() {
  window.open('https://www.instagram.com/bytech_serviciotecnico/','_blank');
}

document.getElementById('year').textContent = new Date().getFullYear();