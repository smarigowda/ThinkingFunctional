function concat(array1, array2) {
  return array1.concat(array2);
}

const isEven = (n) => n % 2 == 0;
const isNotEven = (n) => !isEven(n);
const isGreaterThanFour = (n) => n > 4;

function filter(array, predicate) {
  if (array.length === 0) return [];
  const firstItem = array[0];
  const filteredItem = predicate(firstItem) ? [firstItem] : [];
  return concat(filteredItem, filter(array.slice(1), predicate)).flat();
}

filter([1, 2, 3, 4, 5, 6, 7, 8, 9], isEven); //?
filter([1, 2, 3, 4, 5, 6, 7, 8, 9], isNotEven); //?
filter([1, 2, 3, 4, 5, 6, 7, 8, 9], isGreaterThanFour); //?
