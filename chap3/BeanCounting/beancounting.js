const countChar = (text, char) => {
  let count = 0;

  const textSize = text.length;

  for (let i = 0; i < textSize; i++) {
    if (text[i] == char) {
      count++;
    }
  }

  return count;
};

const countBs = (text) => countChar(text, 'B');

const message = 'A message with some Beee has';
console.log(message, countBs(message), 'B');
