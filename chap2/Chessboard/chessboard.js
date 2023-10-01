const size = 8;
let s = '';

for (let row = 1; row <= size; row++) {
  for (let col = 1; col <= size; col++) {
    if ((row + col) % 2 == 0) {
      s += ' ';
    } else {
      s += '#';
    }
  }
  s += '\n';
}

console.log(s);
