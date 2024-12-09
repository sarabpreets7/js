//reference links ------------------
// https://javascriptbit.com/javascript-interview-questions-cleartrip/
//https://in.linkedin.com/posts/priya-bagde_frontend-interview-experience-cars24-activity-6895783910861864960-Kfzq


// console.log(1 + "2" + "2");  // "122"
// console.log(1 + +"2" + "2");  // "32"
// console.log(1 + -"1" + "2");  // "02"
// console.log(+"1" + "1" + "2");  // "112"


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
// obj.print.apply(obj1,['chandigargh'])
// let newfun = obj.print.bind(obj1);
// newfun('punjab');
// newfun();
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
// // var a = 10;
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
//     a  = 20;
  
//     return y;
// }
// let z = x();
// z();
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
//         function b(i){
//             setTimeout(()=>{
//                 console.log(i);
//             },300)
//         }
//         b(i);
        
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

// ---------------------------------------------------------------------------------------------------------------------------------------------------
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

// Array.prototype.myReduce = function (cb,val){

//     let acc = val;

//     for(let i=0;i<this.length;i++){
//         acc = acc ? cb(acc,this[i]) : this[i];
//     }
//     return acc
// }
// Array.prototype.myFilter = function(cb,i){
//     let result = [];

//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i)){
//             result.push(this[i]);
//         }
//     }
//     return result;

// }
// Array.prototype.myMap = function(cb,idx){

//     let result = [];

//     for(let i=0;i<this.length;i++){
//         result[i] = cb(this[i],idx);
//     }
//     return result;
// }
// let arr =[1,2,3,4,5,6];

// let arr = [
//     {name:"sarab",age:22},
//     {name:"piyush",age:24},
//     {name:"aatif",age:18},
//     {name:"yukta",age:30},
// ]
// let ans = arr.myMap(function(el){
//     return el*2;
// })

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





// let arr = [
//     {id:1,
//     name:"Sarabpreet "},
//     {
//         id:2,
//         name:"random person"
//     },
//     {
//         id:2,
//         name:"sukhbir"
//     },
//     {
//         id:3,
//         name:"sukhbir"
//     }
// ]
// let ans = arr.filter((item)=>{
//     return item.id == 2;
// })




// console.log('hi')

// let arr = [1,2,3,4,5,6];

// let res = arr.reduce((acc,val)=>{return(acc+val)},100);
// console.log(res);
// Array.prototype.myReduce = function(cb,initialVal){

//     let arr = this;
//     let result = initialVal?cb(initialVal,arr[0]):arr[0];

//     for(let i=1;i<arr.length;i++){
//         result = cb(result,arr[i]);
//     }
//     return result;
// }
// let res2 = arr.myReduce((acc,val)=>{return(acc+val)},100);
// console.log(res2);


// Array.prototype.myReduce = function(cb, initialVal) {
//     let arr = this;
//     let result;
//     let startIndex;

//     if (initialVal !== undefined) {
//         result = initialVal; // Use the initial value if provided
//         startIndex = 0; // Start from the first element
//     } else {
//         result = arr[0]; // Use the first element as the initial value
//         startIndex = 1; // Skip the first element
//     }

//     for (let i = startIndex; i < arr.length; i++) {
//         result = cb(result, arr[i]); // Apply the callback
//     }

//     return result; // Return the accumulated result
// };

let obj1 = {
    a: 2,
    b:{
        c:3,
        d:[4,5,6],
        e:null
    }
}
// for(let key in obj1){
//     console.log(key);
// }
// a,b


// function deepCopy(obj){
//     if(obj == null || typeof(obj) != 'object'){
//         return obj;
//     }

//     let copy = {};

//     if(Array.isArray(obj)){
//         return obj.map((el)=>deepCopy(el))
//     }

//     for(let key in obj){
//         if(typeof(obj[key]) == 'object'){
//             copy[key] = deepCopy(obj[key]);
//         }
//         else{
//             copy[key] = obj[key];
//         }
//     }
//     return copy;

// }

// let copyobj = deepCopy(obj1);
// console.log(copyobj);


let obj = {
    
    a:2,
    abc: function(name,...args){
        console.log('name: ',this.a,name,args);
    }
}
let obj2 = {
    a:3
}
let fn = obj.abc.bind(obj2);
// fn('sarab');
// fn('sarab');

Object.prototype.myBind = function(context){

    let fn = this;

    return function(...args){
        
       return fn.call(context,...args)
    }

}
let fn1 = obj.abc.myBind(obj2);
fn1("sarab",'name2','name3','name4');
fn1("sarab");
fn1("sarab");
// Object.prototype.myCall = function(context,...args){
//         let fn = this;

//         return fn(context,args);

// }
// obj.abc.myCall(obj2,'secondat')
