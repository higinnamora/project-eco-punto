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
