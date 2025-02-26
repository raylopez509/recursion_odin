let array = [2, 1, 3, 4];

//if array == length 1, done
//else
//sort left half
//sort right half
//merge

arr1 = [3, 4, 7];
arr2 = [1, 2, 6];

function merge(arr1, arr2) {
  let sortedArr = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length || j < arr2.length) {
    if(arr1[i] <= arr2[j] || j === arr2.length) {
      sortedArr.push(arr1[i]);
      i++;
      console.log(`i: ${i}`);
    }
    else if (arr1[i] > arr2[j] || i === arr1.length) {
      sortedArr.push(arr2[j]);
      j++;
      console.log(`j: ${j}`);
    }
  }
  return sortedArr;
}

console.log(merge(arr1, arr2));