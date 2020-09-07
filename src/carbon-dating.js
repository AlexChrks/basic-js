const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" || sampleActivity < 1 || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  let a = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
  let k = 0.693 / HALF_LIFE_PERIOD;
  let age = a / k;

  if (isNaN(age) == true) {
    return false;
  }
  else {
    return Math.ceil(age);
  }
}