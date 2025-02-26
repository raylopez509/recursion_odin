function fibs(num) {
  let i = 0;
  let arr = [];
  let prev1 = 0;
  let prev2 = 1;

  if(num >= 1) {
    arr.push(prev1);
    i++;
  }
  if(num >= 2) {
    arr.push(prev2)
    i++;
  }
  while(i != num) {
    arrLength = arr.length;
    nextFibNum = arr[arrLength-1] + arr[arrLength-2];
    arr.push(nextFibNum);
    i++;
  }
  console.log(arr);
}

fibs(8);