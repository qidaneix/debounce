function debounce(func, t) {
  let lastTriggerTime = null;
  let timerID = null;
  let lastArgs = null;
  let lastThis = null;

  function startTimer(timerExpired, t) {
    return setTimeout(timerExpired, t);
  }

  function timerExpired() {
    const now = new Date();
    if (shouldInvoke(now)) {
      invokeFunc();
    }
  }

  function shouldInvoke(now) {
    return lastTriggerTime && now - lastTriggerTime >= t;
  }

  function invokeFunc() {
    lastTriggerTime = null;
    timerID = null;
    const result = func.apply(lastThis, lastArgs);
    lastArgs = null;
    lastThis = null;
    return result;
  }

  function debounced(...args) {
    lastTriggerTime = new Date();
    lastThis = this;
    lastArgs = args;
    timerID = startTimer(timerExpired, t);
  }

  return debounced;
}
