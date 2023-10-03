const min = (x, y) => {
  let m = x;
  if (y < m) m = y;

  return m;
};

console.log(min(3, 5));
