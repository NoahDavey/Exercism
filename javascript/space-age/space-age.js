//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, secondsOld) => {
  let earthAge = secondsOld / secondsPerEarthYear;
  let convertedAge = (earthAge / orbitalPeriods[planet]).toFixed(2); //Round to two decimal places
  return +convertedAge
};

const secondsPerEarthYear = 31557600;
const orbitalPeriods = {
  "mercury": 0.2408467,
  "venus": 0.61519726,
  "earth": 1.0,
  "mars": 1.8808158,
  "jupiter": 11.862615,
  "saturn": 29.447498,
  "uranus": 84.016846,
  "neptune": 164.79132,
}