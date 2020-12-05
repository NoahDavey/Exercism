//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {

  let response = responses["default"];
  if(/^[1-9, ]*[A-Z! ]+$/.test(message) || /[!]{2,}/.test(message)) 
    response = responses["yelling"];
  if(/^[A-Z]?[a-z,1-9 ]+[?]+$/.test(message) || /[?]{1}[ ]*$/.test(message))
    response = responses["question"];
  if(/^[A-Z ]*[?]{1}$/.test(message)) 
    response = responses["yellingQuestion"];
  if(/^[ \t\r\t\n]*$/.test(message))
    response = responses["emptyRequest"];

  return response

};

const responses = {
  "question": "Sure.",
  "yelling": "Whoa, chill out!",
  "yellingQuestion": "Calm down, I know what I'm doing!",
  "emptyRequest": "Fine. Be that way!",
  "default":"Whatever.",
}