//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (oldTime) => {
  let newTime = new Date(oldTime.getTime());
  newTime.setSeconds(newTime.getSeconds() + gigasec);
  return newTime;
};

const gigasec = 1e9;