function summation(arr) {
  let sum = 1; //we don't get 1 because the closure has access to the sum variable

  //closure
  function summer() {
    for(let i = 0; i < arr.length; i++) {
      sum *= arr[i];
    }
  }

  summer();

  return sum;

}

console.log(summation([1,2,3,4]));