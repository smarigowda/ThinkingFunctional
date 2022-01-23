const head = (array) => array[0];
const tail = (array) => array.slice(1);

function reduce(reductionFn, initialValue, array) {
  if (array.length === 0) return initialValue;
  const newInitialValue = reductionFn(initialValue, head(array));
  return reduce(reductionFn, newInitialValue, tail(array));
}

const sum = (acc, value) => acc + value;
const max = (acc, value) => (acc > value ? acc : value);

reduce(sum, 0, [1, 2, 3, 4]); //?
reduce(max, 0, [1, 22, 13, 4]); //?
