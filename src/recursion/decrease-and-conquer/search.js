// Approach: Decrease and conquer
function search(array, searchTerm) {
  if (array.length === 0) return false; // searched value is not there
  if (array[0] === searchTerm) return true; //
  return search(array.slice(1), searchTerm);
}

const search_v2 = (array, searchTerm) => array.length === 0 ? false : array[0] === searchTerm || search_v2(array.slice(1), searchTerm)
const search_v3 = (array, searchTerm) => !!(array.length && (array[0] === searchTerm || search_v3(array.slice(1), searchTerm)))


const list = ["santosh", "roopa", "suki", "lingaraju", "samarth", "bharathi"];

search(list, "santosh"); //?
search_v2(list, 'roopa') //?
search_v3(list, 'roopa') //?

