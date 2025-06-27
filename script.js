function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-GB');
  document.getElementById('clock').textContent = time;
}
setInterval(updateClock, 1000);
updateClock();
