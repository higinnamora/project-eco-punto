/**
 * Inicializa el mapa de Google Maps.
 * Esta función es llamada por el API de Google Maps una vez que el script ha cargado.
 */
function initMap() {
  // Coordenadas para Bogotá, Colombia
  const bogota = { lat: 4.60971, lng: -74.08175 };

  // Opciones del mapa
  const mapOptions = {
    zoom: 12,
    center: bogota,
    mapTypeControl: false, // Oculta el control de tipo de mapa (satélite/mapa)
    streetViewControl: false, // Oculta el control de Street View
  };

  // Crear una nueva instancia del mapa y adjuntarla al div con id="map"
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Opcional: Añadir un marcador en el centro de Bogotá
  const marker = new google.maps.Marker({
    position: bogota,
    map: map,
    title: 'Bogotá',
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const toggleA11y = document.querySelector('.toggle-a11y');

  hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  toggleA11y.addEventListener('click', () => {
    body.classList.toggle('a11y-on');
  });
});

// BOTON HACIA ARRIBA
let btnVolverArriba = document.getElementById('btnVolverArriba');

window.onscroll = function () {
  controlarVisibilidadBoton();
};

function controlarVisibilidadBoton() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnVolverArriba.style.display = 'block';
  } else {
    btnVolverArriba.style.display = 'none';
  }
}

btnVolverArriba.addEventListener('click', function () {
  volverArribaSuavemente();
});

function volverArribaSuavemente() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
