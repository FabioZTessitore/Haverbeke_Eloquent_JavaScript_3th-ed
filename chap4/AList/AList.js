const arrayToList = (values) => {
  const arraySize = values.length;

  let list = null;

  for (let i = arraySize - 1; i >= 0; i--) {
    const node = {
      value: values[i],
      rest: list,
    };
    list = node;
  }

  return list;
};

const listToArray = (list) => {
  const values = [];

  for (let node = list; node; node = node.rest) {
    values.push(node.value);
  }

  return values;
};

const prepend = (value, list) => ({ value: value, rest: list });

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(4, arrayToList([1, 2, 3])));
