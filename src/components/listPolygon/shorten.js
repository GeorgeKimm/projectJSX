const maxLengthLetters = 60;

function shorten(str) {
  if (str.length <= maxLengthLetters) return str;
  return str.slice(0, str.lastIndexOf(" ", maxLengthLetters)) + "...";
}

export default shorten;
