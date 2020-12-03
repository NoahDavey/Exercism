//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([colour1, colour2,]) => {
  let band1 = String(COLOURS.indexOf(colour1));
  let band2 = String(COLOURS.indexOf(colour2));
  return Number(band1 + band2);
};

const COLOURS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
