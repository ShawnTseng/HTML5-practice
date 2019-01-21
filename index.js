var x = document.getElementById('demo');

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = 'not supported';
  }
}

function showPosition(position) {
  x.innerHTML = '緯度:' + position.coords.latitude +
      '<br>經度:' + position.coords.longitude;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = 'Be denied';
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = 'location is unavailable';
      break;
    case error.TIMEOUT:
      x.innerHTML = 'request timed out';
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = 'unknown error';
      break;
  }
}