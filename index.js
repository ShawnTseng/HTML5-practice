var w;
function startWorker() {
  if (typeof (Worker) !== 'undefined') {
    console.log('可以使用web worker');
    if (typeof (w) == 'undefined') {
      console.log('如果Web Worker還沒建立才建立');
      w = new Worker('demo_workers.js');
      w.onmessage = function(event) {
        document.getElementById('result').innerHTML = event.data;
      };
    }
  } else {
    console.log('瀏覽器不支援web worker');
  }
}