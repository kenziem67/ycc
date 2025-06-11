var map = L.map('map', {
  center: [39.76941176084296, -75.55162994163686],
  zoom: 14,
});

var Satellite = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
