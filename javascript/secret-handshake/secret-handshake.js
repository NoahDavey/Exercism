//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const codes = {
  '1': 'wink',
  '10': 'double blink',
  '100': 'close your eyes',
  '1000': 'jump',
  '10000': 'reverse'
}

function toBinary(number) {
  return number.toString(2)
}

export const commands = (command) => {
  let secretHandshake = []
  let cmdBinary = toBinary(command)

  for(const code in codes) {
    const handshakeCmd = codes[code]
    // Check if the current command code exists in the command binary
    if(cmdBinary.match(`${code}$`)) {
      if(handshakeCmd === 'reverse') secretHandshake.reverse()
      else {
        // Remove previous command from command binary
        cmdBinary = (+cmdBinary - code).toString() 
        // Add the current handshake command to secret handshake
        secretHandshake = [...secretHandshake, handshakeCmd]
      }
    }
  }
  return secretHandshake
};