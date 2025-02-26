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


function fibsRec(num) {
  if(num === 1) {
    return [0];
  }
  else if(num === 2) {
    return [0,1];
  }
  else {
    let array = fibsRec(num-1);
    array.push(fibsRec(num-2)[fibsRec(num-2).length-1] + fibsRec(num-1)[fibsRec(num-1).length-1]);
    return array;
  }
}

console.log(fibsRec(8));

  // if(num = 1) {
  //   arr.push(prev1);
  //   return arr;
  // }
  // else if(num == 2) {
  //   arr.push(prev1);
  //   arr.push(prev2);
  //   return arr;
  // }
  // else {
  //   arr
  //   return fibsRec(arr)
  // }
  // return 

// fibrec(n = 1) > return [0,1]

// fibrec(n = 2) > return fib(n-1) array, append (fib(n-2)[fib(n-2).length-1] + fib(n-1)[fib(n-1).length-1])