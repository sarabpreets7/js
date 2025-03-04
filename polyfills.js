Function.prototype.myBind = function (context, ...args) {
    const fn = this; // the original function
    return function (...innerArgs) {
      return fn.apply(context, [...args, ...innerArgs]);
    };
  };
  
  // Example usage:
  function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
  }
  
  const boundGreet = greet.myBind(null, "Hello");
  boundGreet("John"); // Output: "Hello, John!"








  Function.prototype.myCall = function (context, ...args) {
    context = context || globalThis; // Handle null/undefined as global object
    const fnSymbol = Symbol(); // Unique key to avoid overwriting existing properties
    context[fnSymbol] = this; // Assign the function to the context object
    const result = context[fnSymbol](...args); // Call the function
    delete context[fnSymbol]; // Remove the temporary function
    return result;
  };
  
  // Example usage:
  function sayHello(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
  
  const person = { name: "Alice" };
  sayHello.myCall(person, "Hi"); // Output: "Hi, Alice!"










  Function.prototype.myApply = function (context, args = []) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
  };
  
  // Example usage:
  function introduce(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
  }
  
  const user = { name: "Bob" };
  introduce.myApply(user, ["Hello", "!"]); // Output: "Hello, my name is Bob!"









  Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
      let resolvedValues = [];
      let resolvedCount = 0;
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            resolvedValues[index] = value;
            resolvedCount++;
            if (resolvedCount === promises.length) {
              resolve(resolvedValues);
            }
          })
          .catch(reject); // Reject immediately if any promise fails
      });
    });
  };
  
  // Example usage:
  const p1 = Promise.resolve(10);
  const p2 = Promise.resolve(20);
  const p3 = Promise.resolve(30);
  
  Promise.myAll([p1, p2, p3]).then(console.log); // Output: [10, 20, 30]











  Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (this.hasOwnProperty(i)) {
        result.push(callback(this[i], i, this));
      }
    }
    return result;
  };
  
  // Example usage:
  const arr = [1, 2, 3];
  const doubled = arr.myMap((num) => num * 2);
  console.log(doubled); // Output: [2, 4, 6]












  Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.myFilter((num) => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]








  Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < this.length; i++) {
      if (this.hasOwnProperty(i)) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  };
  
  // Example usage:
  const sum = [1, 2, 3, 4].myReduce((acc, num) => acc + num, 0);
  console.log(sum); // Output: 10









  Object.myCreate = function (proto) {
    if (proto === null || typeof proto !== "object") {
      throw new TypeError("Prototype must be an object or null");
    }
    function F() {}
    F.prototype = proto;
    return new F();
  };
  
  // Example usage:
  const proto = { greet: "Hello" };
  const obj = Object.myCreate(proto);
  console.log(obj.greet); // Output: "Hello"
