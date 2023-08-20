// M1:

const memoizeMostOptimized = (fn) => {
  let cache = {};
  return (num) => {
    if (num in cache) {
      console.log("Fetching from cache");
      return cache[num];
    } else {
      console.log("Calculating result");
      let result = fn(num);
      cache[num] = result;
      return result;
    }
  };
};

//   M2

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

//   M3

// function that takes a function and returns a function
const memoizeFn = (func) => {
  // a cache of results
  const results = {};
  // return a function for the cache of results
  return (...args) => {
    // a JSON key to save the results cache
    const argsKey = JSON.stringify(args);
    // execute `func` only if there is no cached value of implemented Fn()
    if (!results[argsKey]) {
      // store the return value of implemented Fn()
      results[argsKey] = func(...args);
    }
    // return the cached results
    return results[argsKey];
  };
};
