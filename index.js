function startWorker() {
  if (typeof (Worker) !== 'undefined') {
    console.log("可以使用web worker");
  } else {
    console.log("瀏覽器不支援web worker");
  }
}