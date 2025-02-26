//if array == length 1, done
//else
//sort left half
//sort right half
//merge

array = [105, 79, 100, 110];

function merge(arr1, arr2) {
  let sortedArr = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length || j < arr2.length) {
    if(arr1[i] <= arr2[j] || j === arr2.length) {
      sortedArr.push(arr1[i]);
      i++;
    }
    else if (arr1[i] > arr2[j] || i === arr1.length) {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  return sortedArr;
}

function mergeSort(array) {
  if(array.length === 1) {
    return array;
  }
  else {
    let splitIndex = Math.floor(array.length / 2);
    let splitArrayLeft = array.slice(0, splitIndex);
    let splitArrayRight = array.slice(splitIndex, array.length);
    return merge(mergeSort(splitArrayLeft), mergeSort(splitArrayRight));
  }
}

console.log(mergeSort(array));