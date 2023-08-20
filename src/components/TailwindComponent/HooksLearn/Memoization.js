// The concept of Memoization is backed by two main sub-concepts, namely: Closure and Higher Order Functions



// a simple pure function to get a value adding 10
const add = (n) => n + 10;
console.log("Simple call", add(3));
// a simple memoize function that takes in a function and returns a memoized function
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0]; // just taking one argument here
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};
// creating a memoized function for the 'add' pure function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3)); // calculated
console.log(memoizedAdd(3)); // cached
console.log(memoizedAdd(4)); // calculated
console.log(memoizedAdd(4)); // cached

//
const fibonacci = (n) => {
  // if n is equal to 1, return the first term 1
  if (n == 1) {
    return 1;
  }
  // if n is equal 2, return the second term 1
  else if (n == 2) {
    return 1;
  }

  // else n is greater than two, return the sum of the previous two terms
  else return fibonacci(n - 1) + fibonacci(n - 2);
};
// print the fifth term in the sequence
console.log(fibonacci(5));
