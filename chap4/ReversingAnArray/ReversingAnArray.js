const reverseArray = (values) => {
  const reversedValues = [];

  for (let value of values) {
    reversedValues.unshift(value);
  }

  return reversedValues;
};

const reverseArrayInPlace = (values) => {
  const arraySize = values.length;

  for (let i = 0; i < Math.floor(arraySize / 2); i++) {
    const temp = values[i];
    values[i] = values[arraySize - i - 1];
    values[arraySize - i - 1] = temp;
  }
};

const values = [1, 2, 3];
console.log('values', values);
console.log('reverseArray([1, 2, 3])', reverseArray(values));
console.log('values after reverseArray', values);

console.log('calling reverseArrayInPlace');
reverseArrayInPlace(values);
console.log('values after reverseArrayInPlace', values);
