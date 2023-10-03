const isEven = (n) => {
  if (n == 0) return true;
  else if (n == 1) return false;
  else return isEven(n - 2);
};

console.log('4 is even: ', isEven(4));
console.log('5 is even: ', isEven(5));
