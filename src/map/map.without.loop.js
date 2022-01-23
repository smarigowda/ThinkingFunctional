function map(fn, array) {
  if (array.length == 0) return [];
  return [fn(array[0])].concat(map(fn, array.slice(1)));
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
