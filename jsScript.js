//reference links ------------------
// https://javascriptbit.com/javascript-interview-questions-cleartrip/



// function a(){

//     let bita = 100;
//     function b(){
//         console.log(bita);
//     }

//     return b;
// }

// let x = a();
// x()

// function y(){
//     console.log('yyy');
// }
// var x = function(){
//     console.log('hhh')
// }

// var z = ()=>{
//     return function(){
//         console.log('hello');
//     }
// }
// x();
// x();
// y();
// let ans = z();
// ans()


// {
//     var x = 100;
//     let y = 200;
//     let z = 300;
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
//     console.log(x);
//     console.log(y);
//     console.log(z);

// var obj = {
//     name:"Piyush",
//     display: function(){
//         console.log(this.name);
//     }
// }
// let obj1 = {
//     name:"Sarab"
// }
// obj.display();
// obj.display.call(obj1);


// var promise = new Promise(function(resolve,reject){
//     var x = "geeksfor"
//     var y = "geeksfor"

//     if(x==y){
//         resolve();
//     }
//     else{
//         reject();
//     }
// });

// promise.then(function(){
//     console.log('Success');
// }).catch(function(){
//     console.log('Error');
// })


// function add(a){
//     return function(b){
//         return function (){
//             return a+b;
//         }
//     }
// }
// function addRecur(a){
//     return function(b){
//         if(b) return addRecur(a+b)
//         return a;
//     }
// }

// console.log(addRecur(5)(2)(3)(4)());


// let obj = {
//     name:"Sachin Tendulkar",
//     age:45,
//     print:function(city){
//         console.log(this.name+","+this.age+","+city);
//     }
// }

// obj.print();
// let obj1={
//     name:"Yuvraj Singh",
//     age:40
// }
// obj.print.call(obj1,'Chandigarh')


// console.log(a);


// var a = 30;

// let b ;
// console.log(b);

// b = 10;

// let b = 10;
// (function a(){
//     b = 20;
//     c();
   
//     function c(){
//         console.log(b);
//     }
// })()


// let b ;
// console.log(b);

// b=10;
// console.log(b);n

// let multiply = function(x,y){
//     console.log(x*y);
// }
// function multiply(x,y){
//     console.log(x*y);
// }
// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(3);


// function multiply(x){
//    return function(y){
//     console.log(y);
//     console.log(x*y);
//    }
// }
// let multiBy2 = multiply.bind(this,2);
// multiBy2()(3);


//infinite currying tbd -------

// let multiply = function(x){
//     return function(y){
//         console.log(x*y);
//     }
// }
// let mutiplyBy2 = multiply(2);
// mutiplyBy2(2)

// let sum = function(a){
//     return function(b){
//         if(b){
//             return sum(a+b);
//         }
//         else{
//             return a;
//         }
//     }
   
// }

// let ans = sum(1)(2)(3);
// console.log(ans());

// let a = 10;

// {
//     let a = 11;
//     let b = 12;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// var a = 10;
// function x(){

//     var a = 11;
//     console.log(a);
// }
// x();
// console.log(a);

// function x(){

//     let a = 10;
//     const y = function(){
//         console.log(a);
//     }
//     // a  = 20;
  
//     return y;
// }
// let z = x();
// z()
// (function getage(){
    
//     age = 21;
//     console.log(age);
// })()

// getage();

// function sayHi(){
//     return (()=>0)();
// }
// ---------------------------------------------------------------------------------------------------
// function a(){
    
//     for(var i=0;i<4;i++){
//         function b(){
//             setTimeout(()=>{
//                 console.log(i);
//             },300)
//         }
//         b();
        
//     }
// }
// a();

// function h(){
//     for(var i=0;i<4;i++){
//         let n = i;
//         function c(n){
//             setTimeout(()=>{
//                 console.log(n);
//             },200)
            
//         }
//         c(n)
//     }
// }
// h()

// let b = 10;

// function x(){

//     let msg = "sfrjnrkj";
//     let b = 20;
//     return function y(){
//         let b = 30
//         console.log(msg,b);
//     }

// }
// let z = x();
// z()

// function Counter(){
//     var count = 0;

//     this.incrementCounter = function(){
//         count+=1;
//         console.log(count);
//     }

//     this.decrementCounter = function(){
//         count-=1;
//         console.log(count);
//     }

// }
// count1 = new Counter();
// count1.incrementCounter()
// count1.incrementCounter()
// count1.incrementCounter()
// count1.incrementCounter()
// count1.decrementCounter()

// count2 = new Counter();
// count2.decrementCounter();




// function abs(){
//    var count=0;


//    document.querySelector("#btn").addEventListener("click",function(){
//     count++;
//     console.log(count);
// })
// }
// abs();

// let arr = [1,2,3,4,5,6,7,8];

// let arr2 = arr.map(function(data){
//     return(
//         data*2
//     )
// })
// console.log(arr);
// console.log(arr2);

// let arr3 = arr.forEach(function(data,i){
//     arr[i] = data*2
// })
// console.log(arr);
// document.querySelector(".container").addEventListener("click",function(e){
//     console.log(e.target);
// })

// document.querySelector(".one").addEventListener('click',function(){
//     console.log('one');
// })
// document.querySelector(".two").addEventListener('click',function(){
//     console.log('two');
// })
// document.querySelector(".three").addEventListener('click',function(){
//     console.log('three');
// })
// let arr = [
//     [1,2],
//     [3,4],
//     [5,6,[7,8],9],
//     [10,11,12]
// ];

// let arr2 = [].concat(...arr)
// console.log(arr2);

// function a(x,y,...args){
//     console.log(x,y);
//     console.log(args);
// }

// a(1,2,3,4,5,6,7,8);


// function showText(text,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             resolve(text)
//         },time)
//     })
// }

// function showText2(text,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(text)
//         },time)
//     })
// }
// Promise.all([showText("hi dere",3000),showText2("hello",2000),Promise.resolve("hi hh")]).then((value)=>{
//     console.log(value);
// })

////////////////////////////////////////////////////////////////
// function myPromiseAll(promises){
//     let result = [];
//     return new Promise((resolve,reject)=>{
//     for(let i=0;i<promises.length;i++){
//         promises[i].then((res)=>{
//         result.push(res)
      
//         if(result.length === promises.length ){
//             resolve(result)
//         }
//     })
//     .catch((err)=>{
//         reject(err)
//     })
   
// }
//     })
// }

// function promise1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 1")
//         },2000)
//     })
// }

// function promise2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 2")
//         },1000)
//     })
// }
// Promise.all([promise1(),promise2()]).then((data)=>{
//     console.log(data);
// })
// myPromiseAll([promise1(),promise2(),Promise.resolve("instant")]).then((val)=>{
//     console.log(val);
// })


// let obj = {
//     val:0,
//     add(e){
//         this.val+=e
//         return obj
//     },
//     multiply(e){
//         this.val *= e
//         return obj
//     },
//     subtract(e){
//         this.val -= e
//         return obj
//     },
//     divide(e){
//         this.val =  (this.val / e)
//         return obj;
//     }
// }

// let ans = obj.add(5).multiply(2).subtract(3).divide(2);
// console.log(ans);

// let a;

// a = 10;

// Array.prototype.myReduce = function (cb,value){

//     var acc = value;
    
//     for(let i=0;i<this.length;i++){
       
//         acc =  acc ? cb(acc,this[i].age):this[i].age
        
//     }
//     return acc

// }
// let arr = [
//     {name:"sarab",age:22},
//     {name:"piyush",age:24},
//     {name:"aatif",age:18},
//     {name:"yukta",age:30},
// ]
// let ans = arr.myReduce(function(acc,curr){
//     return (acc+curr)
// },0)
// let array = [1,2,3,4,5]
// let sum = array.myReduce(function(acc,curr){
//     return acc+curr;
// },5)
// console.log(ans);



//debouncing,throttling  polyfill
// const debounce = (cb,d)=>{

//     let timer;
    
   
//     return function (...args){
//         if(timer){
      
//             clearTimeout(timer)
//         }
//         timer = setTimeout(() => {

//             cb();
//         },d);
//     }
    
//}
// const throttle = (cb,d)=>{
//     let timer = 0;

//     return function(){
//         let newTime = new Date().getTime();
//         if((newTime - timer)>=d){
//             cb();
//             timer = newTime
//         }
//     }
// }

// let debounceCount = debounce(apiCall,1000);
// let throttleCount = throttle(apiCall,2000);
// document.querySelector('.btnn').addEventListener('keyup',function(){
//     // debounceCount()
//     throttleCount();
// })
// function apiCall(){
//     console.log('api call made');
// }



// callbacks -----------
// function message(option,cb){

//     setTimeout(()=>{
//         cb(`message option is ${option}`)
//     },1000)
// }
// function read(option){
//     console.log(option);
// }
// const answer = message('example',function(data){
//     console.log(data);
// })





// Promises chaining----------------------
// revise promises combinators
// const sub = new Promise((resolve,reject)=>{

//     const bool = false;
//     setTimeout(()=>{

//         if(bool){
//             resolve("function resolved")
//         }
//         else{
//             reject(new Error('promise rejected'))
//         }
//     },1000)
// })

// sub.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })






// function importantAction(){

//     return new Promise(function(resolve,reject){

//         setTimeout(()=>{

//             resolve("import mesg resolved")
//         },500)
//     })
// }
// function secondaryStep1(){

//     return new Promise(function(resolve,reject){

//         setTimeout(()=>{

//             resolve("secondary 1 mesg resolved")
//         },500)
//     })
// }

// function secondaryStep2(){

//     return new Promise(function(resolve,reject){

//         setTimeout(()=>{

//             resolve("secondary 2 mesg resolved")
//         },500)
//     })
// }

// importantAction().then((res)=>{
//     console.log(res);
//     return secondaryStep1();
// })
// .then((resol)=>{
//     console.log(resol);
//     return secondaryStep2();
// })
// .then((resl)=>{
//     console.log(resl);
// })
// .catch((err)=>{
//     console.log(err);
// })


// function job(bool){
//     return new Promise((resolve,reject)=>{
//         if(bool == true){
//             resolve("success")
//         }
//         else{
//             reject("error")
//         }
//     })
// }

// let promise = job(true);

// promise.then(function(){
//     console.log('Success 1');
// })
// .then(function(){
//     console.log('Success 2');
// })
// .then(function(){
//     console.log('Success 3');
// })
// .catch(function(){
//     console.log("error caught");
// })
// .then(function(){
//     console.log('Success 4');
// })
// .then(function(){
//     console.log('Success 5');
// })
// .then(function(){
//     console.log('Success 6');
// })
// .then(function(){
//     console.log('Success 7');
// })


// const firstPromise = new Promise(function(resolve,reject){
//     resolve("success")
// })

// const secondPromise = new Promise(function(resolve,reject){
//     resolve(firstPromise);
// })
// secondPromise.then((data)=>{
//     return data;
// })
// .then(function(data){
//     console.log(data);
// })

// function importAction(){
//     return new Promise((resolve,reject)=>{
//         resolve("important action")
//     })
// }

// function stepFirst(){
//     return new Promise((resolve,reject)=>{
//         resolve("First Step")
//     })
// }

// function stepSecond(){
//     return new Promise((resolve,reject)=>{
//         resolve("Second Step")
//     })
// }

// recursiveResolve([importAction(),stepFirst(),stepSecond()])
// function recursiveResolve(functionArray){

//     if(functionArray.length == 0){
//         return;
//     }
//     let currentPromise = functionArray.shift();
//     currentPromise.then((data)=>{
//         console.log(data);
//     })
//     .catch((data)=>{
//         console.log(data);
//     })
//     recursiveResolve(functionArray)
// }


//closures examples --------------------------------

// function createBase(number){
//     return function(num){
//        console.log(number + num);
//     }
// }

// let newBase = createBase(5);
// newBase(5)
// newBase(10)
// newBase(15)
// newBase(20)


// function privateCounter(){
//     var counter =0;

//    function retrive(){
//        console.log("Count :",counter); 
//     }

//     function increment(num){
//         counter += num
//     }
//     function decrement(num){
//         counter -= num
//     }
//     return {retrive,increment,decrement}
// }
// let newCounter = privateCounter();
// console.log(newCounter);
// newCounter.increment(5);
// newCounter.increment(5);
// newCounter.increment(5);
// newCounter.retrive();
// newCounter.decrement(15);
// newCounter.retrive();



// function base(){

//     let count =0;
//     return function(){
//         if(count > 0){
//             console.log('runs only once');
//         }
//         else{
//             console.log('function ran');
//             count++;
//         }
//     }
// }
// let func = base();
// func()
// func()
// func()


// Module Pattern -----------------------------------

// var module = (
//     function(){

//         function private(){
//             console.log('private function');
//         }


//         return {
//             publicAccess :function (){

//                 console.log('public function');
//                 private();
//             }
//         }
//     }
// )()

// module.publicAccess()
// module.private();

// callback hell ------------------------------------------------------
// function importantAction(action,cb){

//     setTimeout(()=>{
//         cb(action)
//     },2000)

// }
// function someOtherAction(action,cb){
//     setTimeout(()=>{
//         cb(action);
//     },1500)
// }

// function someActionTwo(action,cb){
//     setTimeout(()=>{
//         cb(action);
//     },1500)
// }

// importantAction("revise javascript",function(...args){
//     console.log(args[0]);

//     someOtherAction("revise ds algo",function(...args){
//         console.log(args[0]);

//         someActionTwo("complete training",function(...args){
//             console.log(args[0]);
//         })
//     })
// })


// promise combinators  -------------------------------------------------

// https://v8.dev/features/promise-combinators

// name	description	status
// Promise.allSettled	does not short-circuit	added in ES2020 ✅
// Promise.all	short-circuits when an input value is rejected	added in ES2015 ✅
// Promise.race	short-circuits when an input value is settled	added in ES2015 ✅
// Promise.any	short-circuits when an input value is fulfilled	added in ES2021 ✅


// function promise1(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("promise 1 resolved")
//         },1500)
//     })
// }

// function promise2(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("promise 2 resolved")
//         },2000)
//     })
// }

// function promise3(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("promise 3 resolved")
//         },500)
//     })
// }

// Promise.all([promise1(),promise2(),promise3()]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

















// console.log('start');

// const promise = new Promise((res,rej)=>{
//     console.log(1);
//     console.log('asdsfsdsd');
//     console.log('2323');
//     res(2);

//     console.log(434345);
// })

// promise.then((result)=>{
//     console.log(result);
// })

// console.log('end');



// const promise1 = new Promise((res,rej)=>{

//     setTimeout(()=>{
//         rej("rejected one")
//     },100)
// })

// const promise2 = new Promise((res,rej)=>{

//     setTimeout(()=>{
//         res("rejected two")
//     },500)
// })

// const promise3 = new Promise((res,rej)=>{

//     setTimeout(()=>{
//         rej("rejected three")
//     },1800)
// })

// const promise4 = new Promise((res,rej)=>{

//     setTimeout(()=>{
//         res("rejected one")
//     },1400)
// })

// Promise.any([promise1,promise2,promise3,promise4]).then((data)=>{
//     console.log(data);
// })

// Promise.race([promise1,promise2,promise3,promise4]).then((data)=>{
//     console.log(data);
// })


// const a = 11;

// console.log(a);

// a = 11;

// let a = 11;

// {
//     let a = 13
// }


// const promise1 = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('promise1 resolved')
//         },1500)
//     })
// }

// const promise2 = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('promise2 resolved')
//         },0)
//     })
// }


// const promise3 = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             rej('promise3 rejected')
//         },1000)
//     })
// }

// Promise.all([promise1(),promise2(),promise3()]).then((res)=>{
//     console.log(res,'resutlttt');
// })
// .catch((err)=>{
//     console.log(err);
// })



// let name;


// console.log(name);

// name = "sarab";
// console.log(name);


// Array.prototype.myReduce = function(cb,initialValue){

//     let arr = this;
//     let start = 0;
//     let val;
//     if(initialValue){
//         val = initialValue;
//     }
//     else{
//         val = arr[0];
//         start+=1;
//     }
//     for(let i=start;i<arr.length;i++){
//         val = cb(val,arr[i],i,arr);
//     }

//     return val;
// }
// function add(a,b){
//     return a+b;
// }
// let newArr = [1,2,3,4,5];
// let result = newArr.myReduce(add,5);
// console.log(result);


// function debounce (cb,d){

//     let timer;

//     return function(){

//         if(timer){
//             clearTimeout(timer)
//         }
//         timer = setTimeout(()=>{
//             cb()
//         },d)
//     }
// }
// function apiCall(){
//     console.log("api call being made");
// }

// let debounceFn = debounce(apiCall,1000);
// debounceFn();
// debounceFn();
// debounceFn();
// debounceFn();
// debounceFn();
// debounceFn();
// debounceFn();
// debounceFn();


// let debounceFn2 = debounce(apiCall,2000);
// debounceFn2()






//    Sort "array" so that all elements with the value of zero are moved to the
//    end of the array, while the other elements maintain order.
//    [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
// //    Zero elements also maintain order in which they occurred.
//    [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
// Do not use any temporary arrays or objects. Additionally, you're not able
//    to use any Array or Object prototype methods such as .shift(), .push(), etc
//    the correctly sorted array should be returned.

// function moveZeros(arr){

//     let st = 0;
//     end = arr.length-1;

//     // for(let i=0;i<arr.length;i++){
//     //     if(arr[i] == 0 ){
//     //         [arr[i],arr[end]] = [arr[end],arr[i]];
//     //         end--;
//     //     }
//     // }
//     // return arr;
//     let n = arr.length;
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<n-i-1;j++){
//             if(arr[j] == 0 && arr[j+1] != 0){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr;
// }
// let result = moveZeros([0, "0", 3,2,1,'0']);
// console.log(result);



// function arrayProductExcludingCurrent(numbers) {
//   let leftProd = [];
//   let rightProd = [];
//   let n = numbers.length-1;
//   let result = [];

//   for(let i=0;i<numbers.length;i++){
    
//     if(leftProd.length == 0){
//         leftProd.push(numbers[i]);

//     }
//     else{
//         leftProd.push(numbers[i]*leftProd[leftProd.length-1]);
//     }

   
//   }
//   for(let i=numbers.length-1;i>=0;i--){
  
//     if(rightProd.length == 0){
//         rightProd.push(numbers[i]);

//     }
//     else{
      
//         rightProd.unshift((numbers[i]*rightProd[0]))
//     }

   
//   }
  
//   for(let i=0;i<numbers.length;i++){

//     result.push((i>0?leftProd[i-1]:1)*(i<numbers.length-1?rightProd[i+1]:1));
//   }
//   return result;
// }


// let ans = arrayProductExcludingCurrent([1,2,3]);
// console.log(ans);



// function mostCommonElements(numbers, k) {
  
//     let hash = {};
  
//     for(let el of numbers){
//       hash[el] = (hash[el] || 0) +1;
  
//     }
//     let heap = [];
  
//     for(let i=0;i<Object.keys(hash).length;i++){
//         // console.log([Object.keys(hash)[i]]);
//       heap.push({'key':Object.keys(hash)[i],'value':hash[Object.keys(hash)[i]]});
//     }
//     heap.sort((a,b)=>{
//       return a.value - b.value;
//     })
   
//     let n = heap.length - k;
//     while(n-->0){
//       heap.shift();
//     }

//     return heap.map((el)=>parseInt(el.key));
//   }
//   let ans = mostCommonElements([4,4,4,6,6,5,5,5],2);
//   console.log(ans);





// function compressString(str) {

//   //   for (let i = 0; i < str.length; i++) {
//   //     let char = str.charAt(i);
//   //     // mapObj[char] = (mapObj[char] || 0) + 1;
//   //   }
//   let idx = 0;
//   let result;
//   while (idx < str.length) {
//     let char = str.charAt(idx);

//     let count = 1;
//     while (idx < str.length && str.charAt(idx + 1) == char) {
//       idx++;
//       count++;
//     }
//     result += `${char}${count > 1 ? count : ""}`;
//   }
//   return result;


// }



// function compressString

// function compressString(str) {


//   let idx = 1;
//   let result;
//   let currChar = str.charAt(0);
//  let count = 1;
 
 
//  while(idx < str.length) {
//      let char = str.charAt(idx);
 
 
//         if(char == currChar){
//         count++;
//         idx++;
//         }
//         else{
 
//         result += `${currChar}${count>1?count:''}`;
//         count = 0;
//         currChar = char;
//            }
//  }

//  return result
//  }
//  let ans1 = compressString("aaaabbbcdabcd");
//  console.log(ans1);
 

// let obj = {
//   a: 'hi',
//   b: {
//     a: null,
//     b: ['foo', '', null, 'bar'],
//     d: 'hello',
//     e: {
//       a: 'yo',
//       b: undefined,
//       c: 'sup',
//       d: 0,
//       f: [
//         { foo: 123, bar: 123 },
//         { foo: 465, bar: 456 },
//       ],
//     },
//   },
//   c: 'world',
// }

// let result = squashObj(obj);
// console.log(result);
// function squashObj(obj,parentKey){

//   let result = {};

//   for(let key in obj){
//     let newKey = parentKey?(key?parentKey+"."+key:parentKey):key;
//     if(Array.isArray(obj[key])){

//       obj[key].forEach((item,index)=>{
//         if(Array.isArray(item)){
//         let obj = squashObj(item,newKey+"."+index);
//           result = {...result,...obj}
//         }
//         else if(typeof item == 'object'){
//           let obj = squashObj(item,newKey+"."+index);
//           result = {...result,...obj}
//         }
//         else{
//           if(item != undefined){
//           result[newKey+"."+index] = item;
//           }
          
//         }
      
//       })
//     }
//     else if(typeof obj[key] == 'object'){
//       let squash = squashObj(obj[key],newKey);
//       result = {...result,...squash}
//     }
//     else{
//       if(obj[key] != undefined){
//         result[newKey] = obj[key];
//       }
    
//      }
//   }
//   return result;

// }

// let obj = {
//   a: 1,
//   b: [{ c: 2 }, [3]],
//   c: [[{ a: 2, b: 3 }]],
// }

// function deepOmit(val, keys) {
 
//   let result = {};
 
//   for(let key in val){
 
//   if(!keys.includes(key)){
 
//       if(typeof val[key] == 'object' && !Array.isArray(val[key])){
//         result[key] = deepOmit(val[key],keys);
//       }
//         else if(Array.isArray(val[key])){
//           let newArr = [];

//           for(let el of val[key]){
//             if(typeof el == 'object' && !Array.isArray(el)){
//               newArr.push(deepOmit(el,keys));
//               // console.log(result[key],"kklk");
//             }
//             else if(Array.isArray(el)){
//              for(let e of el){
//               newArr.push(deepOmit(e,keys))
//              }
//             }
//             else if(!keys.includes(el)){
//               newArr.push(el)
//             }
//           }
//           result[key] = newArr
//         }
//         else{
//           result[key] = val[key];
//         }
//       }
//   }
//   return result;
//  }
//  let res = deepOmit(obj,['b', 'e']);
//  console.log(res)



// function mergeNewInterval(intervals, newInterval) {
  
//   let result = [];
//   let idx = 0;
//   let currInterval = intervals[idx];

//   while(idx<intervals.length && currInterval[1]<newInterval[0]){
//     currInterval = intervals[idx];
//     result.push(currInterval);
//     // console.log(currInterval,'curr')
//     idx++;
//   }
//   currInterval[1] = Math.max(currInterval[1],newInterval[1]);
//   idx++;
//   while(idx<intervals.length){
//     let interval = intervals[idx];
//     if(currInterval[1]>=interval[0]){
//       currInterval[1] = Math.max(currInterval[1],interval[1]);
      
//     }
//     else{
//       result.push(currInterval);
//       currInterval = interval;
//     }
//     idx++;
//   }
//   if(result[result.length-1][1] < currInterval[0]){
//     result.push(currInterval)
//   }
  
//   return result;

// }

// //  newInterval = 
// let intervals = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ];
// let res = mergeNewInterval(intervals,[2,5]);
// console.log(res);



// function countPalindromicSubstrings(str) {
//   let count =0;
//    for(let i=0;i<str.length;i++){
//      count += parseInt(expandForPalindrome(str,i,i));
//      count += parseInt(expandForPalindrome(str,i,i+1));
//    }
//    return count;
// }

// function expandForPalindrome(str,st,end){

//   let count=0;
//    while(st>=0 && end<str.length && str.charAt(st) == str.charAt(end)){
//      st--;
//      end++;
//      count++;
//    }
//    st++;
//    end--

//    return count;


//  }

//  let res1 = countPalindromicSubstrings("bbb")
//  console.log(res1);

// function pairSum(numbers, target) {
//   let obj = {};
// let result = [];
//   for(let i=0;i<numbers.length;i++){
 
//     let diff = target - numbers[i];
 
//     if(obj.hasOwnProperty(diff)){
   
//       result.push(obj[diff]);
//       result.push(i);
//       return result;
//     }
//     else{
//       obj[numbers[i]] = i;
//     }

//   }
//   return [];
// }

// let res = pairSum([0,7,1,9],7);
// console.log(res,'res');



// function decodeMessage(str) {
  
//   if(str.length == 0){
//     return 1;
//   }
 
//   let count = 0;
//   let no = parseInt(str.charAt(0));

//   if(no >=1 && no<=26 && String(no).charAt(0) != '0'){
//     let res = decodeMessage(str.substring(1));
    
//     count += res;

//   }
//   if(str.length >=2){
//     let no2 = parseInt(str.substring(0,2));
    
//     if(no2 >=1 && no2<=26 && String(no).charAt(0) != '0') {
//       let res= decodeMessage(str.substring(2));
//       count += res;

//   }
//   }
//   return count;
  

// }


// let result = decodeMessage('1106');
// console.log(result);


// function isStringPalindrome(str) {
  
//   let strng = ""
//   for(let i=0;i<str.length;i++){
// let char = str.charAt(i);

// if(char !=" " && ((char>='a' && char <='z') || (char >='A' && char <= 'Z' ) || (char >= '0' && char <= '9') )){
//   strng += char;
// }

//   }

// let i=0;
// let j = strng.length-1;
//   while(i<=j){
//     if(strng.charAt(i) == strng.charAt(j)){
//       i++;
//       j--;
//     }
//     else{
//       return false;
//     }
//   }
//   return true;
// }



// function longestConsecutiveNumberSeq(numbers) {
//   let numSet = new Set(numbers);

// let longest = 0;
//   for(let num of numSet){
//     if(!numSet.has(num-1)){
//       let currNum = num
//       let currSeq = 0;
//       while(numSet.has(currNum)){
//         currSeq++;
//         currNum++;
//       }
//       longest = Math.max(longest,currSeq)
//     }
//     else{
//       continue;
//     }
//   }
//   return longest;
// }

// let ans = longestConsecutiveNumberSeq([5,1,-4]);
// console.log(ans);



// let arr =['key','val','tal']
// console.log(typeof arr.join(','));


// function longestIncreasingSubsequence(numbers) {
//     let memo={};


//     function longestSub(index,prevIdx){
    
//         if(index == numbers.length){
//             return 0;
//         }
//         let key = `${index},${prevIdx}`;
//         if(memo[key]){
//             return memo[key];
//         }
//         // console.log(index,prevIdx,'hhh');
//         let length = longestSub(index+1,prevIdx);

//         if(prevIdx == -1 ||( numbers[index]>numbers[prevIdx] ) ){
//             length = Math.max(length,1+ longestSub(index+1,index))
//         }

//         return memo[key]= length;
//     }

//     let res = longestSub(0,-1,0);
//     return res;

//   }

//   console.log(longestIncreasingSubsequence([0,1,0,3,2,3]));





// function throttle(func, wait) {

//    let timer;

//    return function(){
//     let currTime = new Date().getTime();
//     if(currTime - timer >= wait){
//         func();
//         timer = currTime;
//     }
//    }
//   }


//  function kthSmallestElementInABst(root, k) {
//     let nodeVal = traverse(root,0,k);
//     return nodeVal;
//   }
//   function traverse(node,count,k){
//     if(node == null){
//       return -1;
//     }
  
//     let left = traverse(node.left,count,k);
//     if(left != -1){
//       return left;
//     }
    
//     if(count+1 == k){
//       return node.val;
//     }
  
//    return traverse(node.right,count+1,k);
//   }
//   let res= kthSmallestElementInABst()



// function listFormat(items, options) {
//   let result = "";

//   if(items.length == 1 || items.length == 0){
//     if(items.length == 0){
//         return result;
//     }
//     result += items[0];
//     return result;
//   }
//   if(items.length == 2){
//     result += items[0] +" and "+ items[1];
//     return result;
//   }
//   items = items.filter((item)=>{
//     return item !=""
//   })
//   if(options && options['unique']){
//     items = new Set(items);
//     items = [...items]
//   }
//   if(options && options['sorted']){
//     items.sort();
//   }

//   let lengthLimit = options && options.length>0 ?options.length:items.length;

//   let displayItems = items.slice(0,lengthLimit);
//   let remainCount = items.length - displayItems.length;

//   result = displayItems.slice(0,-1).join(", ") + ` and ${displayItems[displayItems.length-1]}`;

//   if(remainCount >=1){
//     result = displayItems.slice(0).join(", ") + ` and ${remainCount} other${remainCount>1?'s':''}`
//   }
//   return result;
// }

// let ans = listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
//     length: 3,
//     unique: true,
//   });
// console.log(ans);


// function segmentWords(str, dict) {

//     let wordGrid = new Set(dict);
//     let memo = {};
 
//         function backTrack(start){
    
//           if(start == str.length){
//             return true;
//           }
//             if(memo.hasOwnProperty(start)){
//             return memo[start]
//             }
//           for(let end = start+1;end<=str.length;end++){
    
//             let word = str.substring(start,end);
            
//             if(wordGrid.has(word) && backTrack(end)){
//                 console.log(word,'lk');
//               return memo[start] = true;
//             }
//           }
//           return false;
//         }
//         return backTrack(0);
//     }
//     let result = segmentWords("greatfrontendgreat",["frontend","great"]);
//     console.log(result);

// function gridDistinctPaths(m, n) {
  
//     let row = new Array(n);
//     let grid = [];
//     for(let i=0;i<m;i++){
//       grid.push(row);
//     }
  
//     let dirs = [[1,0],[0,1]];
//     let ans = dfs(0,0);
//     return ans;
  
//   function dfs(i,j){
  
//   if(i>=m || j >= n){
//     return 0;
//   }
//     if(i==m-1 && j == n-1){
//       return 1;
//     }
//   let count = 0;
//   for(let dir=0;dir<dirs.length;dir++){
//     count+= dfs(i + dirs[dir][0],j+ dirs[dir][1]);
//   }
//   return count;
  
//   }
//   }
//   let ans = gridDistinctPaths(10,4);
//   console.log(ans);



function serializeHTML(element) {
    return serialIze(element,0);
   }
   function serialIze(element,depth){
     let indent = '\t'.repeat(depth);
   
     let result = "";
     result += indent+`<${element.tag}>\n`;
     if(element.children){
       for(let i=0;i<element.children.length;i++){
         let el = element.children[i];
   
         if(typeof el == 'string'){
           result+= `\t${el}\n`
         }
         else{
           result+= serialIze(el,depth+1);
         }
       }
     }
     result += indent+`</${element.tag}>\n`;
   
   return result;
   }

   let ans = serialIze({ children: ['bar1', 'bar2'], tag: 'span' });
   console.log(ans);
