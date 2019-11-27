
// same values are calculated over and over again

function fibun_slow(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibun_slow(n-1) + fibun_slow(n-2);
  }
}

// preVals stores previous results to make it much faster

function fib(n, preVals=[]) {
  if (preVals[n] != null) {
    return preVals[n];
  }
  var result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n-1, preVals) + fib(n-2, preVals);
  }

  preVals[n] = result;
  return result
}

console.time('fast');
console.log(fib(40));
console.timeEnd('fast');
console.time('slow');
console.log(fibun_slow(40));
console.timeEnd('slow');
