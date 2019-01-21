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

  var key = 'fill your key';

  var latlon = position.coords.latitude + ',' + position.coords.longitude;

  // 顯示地圖
  var img_url =
      'https://maps.googleapis.com/maps/api/staticmap?center=' + latlon +
      '&zoom=14&size=400x300&sensor=false&key=' + key;
  document.getElementById('map').innerHTML = '<img src=\'' + img_url + '\'>';
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