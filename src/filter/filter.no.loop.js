function concat(array1, array2) {
  return array1.concat(array2);
}

const head = (array) => array[0];
const tail = (array) => array.slice(1);

const isEven = (n) => n % 2 == 0;
const isNotEven = (n) => !isEven(n);
const isGreaterThanFour = (n) => n > 4;

function filter(array, predicate) {
  if (array.length === 0) return [];
  const firstItem = head(array);
  const filteredItem = predicate(firstItem) ? [firstItem] : [];
  //   return concat(filteredItem, filter(tail(array), predicate));
  return filteredItem.concat(filter(tail(array), predicate));
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], isEven));
filter([1, 2, 3, 4, 5, 6, 7, 8, 9], isNotEven); //?
filter([1, 2, 3, 4, 5, 6, 7, 8, 9], isGreaterThanFour); //?
