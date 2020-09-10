module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  seconds = turns / (turnsSpeed / 3600);
  seconds = Math.floor(seconds);
  const obj = {
    'turns': turns,
    'seconds': seconds,
  }
  return obj;
}
