let timerId = null;

self.onmessage = function (e) {
  const { action, interval } = e.data;

  if (action === "start") {
    if (timerId) clearInterval(timerId);
    let remainingTime = interval;
    timerId = setInterval(() => {
      remainingTime -= 1;
      self.postMessage(remainingTime);
      if (remainingTime <= 0) {
        clearInterval(timerId);
        timerId = null;
      }
    }, 1000);
  } else if (action === "stop") {
    clearInterval(timerId);
    timerId = null;
  }
};
