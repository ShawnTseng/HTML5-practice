var x = document.getElementById('demo');

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = 'not supported';
  }
}

function showPosition(position) {
  x.innerHTML = '緯度:' + position.coords.latitude +
      '<br>經度:' + position.coords.longitude;
}