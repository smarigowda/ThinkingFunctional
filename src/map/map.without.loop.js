function concat(array1, array2) {
  return array1.concat(array2);
}

const head = (array) => array[0];
const tail = (array) => array.slice(1);

function map(fn, array) {
  if (array.length == 0) return [];
  return [fn(head(array))].concat(map(fn, tail(array)));
}

function mapv2(fn, array) {
  if (array.length === 0) return [];
  return concat([fn(head(array))], mapv2(fn, tail(array)));
}

let myArray = [1, 2, 3, 4, 5];

let result1 = map((n) => n * 2, myArray); //?

const output = [2].concat([4].concat([6].concat([8].concat([10].concat([]))))); //?

const rec1 = [2].concat([4].concat([6].concat([8].concat([10])))); //?
const rec2 = [2].concat([4].concat([6].concat([8, 10]))); //?
const rec3 = [2].concat([4].concat([6, 8, 10])); //?
const rec4 = [2].concat([4, 6, 8, 10]); //?
const rec5 = [2, 4, 6, 8, 10]; //?

let result2 = map((n) => n / 2, myArray); //?

//================

let result3 = mapv2((n) => n * 5, myArray); //?
