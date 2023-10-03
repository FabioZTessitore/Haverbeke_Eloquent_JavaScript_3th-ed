const range = (start, end, step = 1) => {
  const values = [];

  if (end < start) {
    if (step > 0) step = -1;

    for (let number = start; number >= end; number += step) {
      values.push(number);
    }
  } else {
    if (step < 0) step = 1;

    for (let number = start; number <= end; number += step) {
      values.push(number);
    }
  }

  return values;
};

const sum = (values) => {
  let theSum = 0;

  for (let value of values) {
    theSum += value;
  }

  return theSum;
};

console.log('sum(range(1, 10))', sum(range(1, 10)));
console.log('sum(range(10, 1))', sum(range(10, 1)));
