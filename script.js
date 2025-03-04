//reference links ------------------
// https://javascriptbit.com/javascript-interview-questions-cleartrip/
//https://in.linkedin.com/posts/priya-bagde_frontend-interview-experience-cars24-activity-6895783910861864960-Kfzq
https: //github.com/piyush-eon/frontend-interview-questions/tree/master/reactjs-interview-questions

    // https://rowdycoders.com/top-50-most-asked-javascript-logical-output-interview-qa
    // https://www.youtube.com/watch?v=65slMcTFSMM   - js output ques video (imp)

    // https://www.naukri.com/code360/problems?cvId=0eefa3259ae742579bbe39162dffbcf2&campaign=dashboard_interviews&medium=desktop&source=naukri

    // console.log(1 + "2" + "2");  // "122"
    // console.log(1 + +"2" + "2");  // "32"
    // console.log(1 + -"1" + "2");  // "02"
    // console.log(+"1" + "1" + "2");  // "112"

    // https://codesandbox.io/p/github/gouravjeet/awesome-front-end-system-design/main
    //https://www.interviewbit.com/javascript-interview-questions/

    // for core javascript -> https://javascript.info

    // ds algo - https://www.teamblind.com/post/new-year-gift---curated-list-of-top-75-leetcode-questions-to-save-your-time-OaM1orEU

    // frontend preparation kit ->   https://www.youtube.com/watch?v=LJESy3k8kYc

    // performance of web app - https://web.dev/learn/performance

    // https://bigfrontend.dev/

    // https://www.greatfrontend.com/questions


    //todo -- 
    //revise maps
    //searching,sorting algos
    //transpose of matrix

    // List of JS questions
    // 1 Chain calculator
    // 2 Promises in sequence
    // 3 Pipe and compose
    // 4 Array polyfills
    // Topics covered in this document
    // 5 Prototype and prototype inheritance
    // 6 Call, apply, bind
    // 7 Flatten Array
    // 8 Basic Debouncing 9 Basic Throttling
    // 10 Event emitter
    // 11 Debouncing leading and trailing spaces 12 MapLimit
    // 13 Cancelable Promise
    // 14 TypeHead search using LRU cache
    // 15 Doc comparison
    // 16 Currying
    // 17 Execute task in parallel
    // 18 Find the matching element in the DOM
    // 19 Sort Array
    // 20 Object Flatten
    // 21 Array] Dispatch event on push
    // 22 Deep clone object
    // 23 JSON.stringify
    // 24 React DOM render
    // 25 Retry promises N times
    // 26 Extended version of Event emitter
    // 27 Promise.all
    // 28 Promise.race 29 Promise.any
    // 30 Promise.allSettle
    // 31 ClearAllTimeout 32 Memoization
    // 33 Async Progress bar 34 GroupBy Polyfill Loadsh
    // 34 single and double click handler
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
    //     var y = "geekksfor"

    //     if(x==y){
    //         resolve('resolved');
    //     }
    //     else{
    //         reject('rejected');
    //     }
    // });

    // promise.then(function(val){
    //     console.log('Success',val);
    // }).catch(function(er){
    //     console.log('Error',er);
    // })

    // let p1 = new Promise(function(res,rej){

    //     res('succs')
    // })
    // function add(a){
    //     return function(b){
    //         return function (){
    //             return a+b;
    //         }
    //     }
    // }
    // console.log(add(4)(5));
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
    // console.log(typeof sayHi());
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
    //     throw Error('err')
    // })
    // .then(function(){
    //     console.log('Success 3');
    //     return 3;
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










    // console.log(2 + "-2" + "2");   //2-22
    // console.log("0" - "2" + 78);

    // (function(){
    //     console.log('tt');
    // })()
    // var x =2;


    // console.log(++x);



    // let hero = {
    //     powerLevel: 99,
    //     getPower(){
    //       return this.powerLevel;
    //     }
    //   }

    //   let getPower = hero.getPower;

    //   let hero2 = {powerLevel:42};
    //   console.log(getPower());
    //   console.log(hero.getPower());
    //   console.log(getPower.apply(hero2));



    // (function(a){
    //     return (function(){
    //       console.log(a);
    //       a = 23;
    //     //   var a;
    //     })()
    //   })(45);


    // let newArray = new Array(700).fill('♥');
    // console.log(newArray);




    // let multiple = ((a,b)=>{
    //     console.log(a*b);
    // })

    // multiple(2,3)
    // let multi2 = multiple.bind(this,2);
    // multi2(2)



    // function curry(a){
    //     return function(b){
    //         if(b){
    //             return curry(a*b)
    //         }
    //         else{
    //             return a;
    //         }
    //     }
    // }

    // let ans = curry(2)(2)(2)(2)(2);
    // console.log(ans());


    // function debounce(cb,d){

    //     let timer;

    //     return function(...args){

    //         if(timer){
    //             clearTimeout(timer);
    //         }
    //        timer = setTimeout(()=>{
    //             cb()
    //         },d)
    //     }
    // }
    // function print(){
    //     console.log('fired');
    // }
    // let debouncedFn = debounce(print,3000)
    // document.querySelector(".btnn").addEventListener('keyup',function(){
    // // debouncedFn()

    // throttledFn();
    // })


    // function throttle(cb,d){

    //     let timer =0;
    //     console.log(1);
    //     return function(...args){
    //         let currTime = new Date().getTime();
    //         if(currTime - timer >= d){
    //             cb();
    //             timer = currTime
    //         }
    //     }
    // }
    // let throttledFn = throttle(print,2000);


    // let x = { b: 1, c: 2 };
    // let y = Object.keys(x);
    // console.log(y);


    // let arrayy = [1,2,3,4,[6,7,8,[4,3,5,6,[5,3,7,85]],5,3,4,89,59]]



    // function concatFn(arr){

    //     let result = [];
    //     for(let i=0;i<arr.length;i++){
    //         if(Array.isArray(arr[i])){
    //             result = result.concat(concatFn(arr[i]));
    //         }
    //         else{
    //             result.push(arr[i]);
    //         }
    //     }
    //     return result;
    // }
    // let ans = concatFn(arrayy);
    // console.log(ans);



    // let x = '{ "b": 1, "c": 2 }';
    // let y = JSON.parse(x);
    // console.log(y);


    // let x =[1,2,3]
    // let y = [2]
    // console.log((x+y));



    // Implement your own promise in JS-------------------------

    // function foo(a,b){
    //     console.log(arguments);
    // }
    // foo(1,2,3,4,5,6);







    // var x =100;

    // {
    //     var x = 10;
    //     console.log(x);
    // }




    // function compareAna(str1,str2){
    //     if(str1.length != str2.length){
    //         return false;
    //     }
    //     let obj1 = {};

    //     for(let i=0;i<str1.length;i++){
    //         let ch = str1.charAt(i)
    //         obj1[ch] = obj1[ch]?obj1[ch]+1:1;
    //     }

    //     for(let i=0;i<str2.length;i++){
    //         let ch = str1.charAt(i);
    //         if(obj1[ch]){
    //             obj1[ch] = obj1[ch] - 1;
    //             if(obj1[ch] == 0){
    //                 delete obj1[ch]
    //             }
    //         }
    //         else{
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    // let str1 = 'anagramm';
    // let str2 = 'naamarg';
    // let ans = compareAna(str1,str2);
    // console.log(ans);


    // let var const
    // let a = 10;
    // // a = 11;

    // console.log(a);


    //     deep clone function

    //     /**
    //  * @template T
    //  * @param {T} value
    //  * @return {T}
    //  */
    // export default function deepClone(value) {
    //   // Handle null and primitive values
    //   if (value === null || typeof value !== 'object') {
    //     return value;
    //   }

    //   // Handle arrays
    //   if (Array.isArray(value)) {
    //     return value.map((item) => deepClone(item));
    //   }

    //   // Handle objects
    //   const clonedObject = {};
    //   for (const key in value) {
    //     if (value.hasOwnProperty(key)) {
    //       clonedObject[key] = deepClone(value[key]);
    //     }
    //   }

    //   return clonedObject;
    // }

    // // Example usage:
    // const obj1 = { user: { role: 'admin' } };
    // const clonedObj1 = deepClone(obj1);

    // clonedObj1.user.role = 'guest';

    // console.log(clonedObj1.user.role); // 'guest'
    // console.log(obj1.user.role); // 'admin'

    // const obj2 = { foo: [{ bar: 'baz' }] };
    // const clonedObj2 = deepClone(obj2);

    // obj2.foo[0].bar = 'bax';

    // console.log(obj2.foo[0].bar); // 'bax'
    // console.log(clonedObj2.foo[0].bar); // 'baz'



    // function isDeep(obj1, obj2) {
    //     // Base case: check if both values are strictly equal
    //     if (obj1 === obj2) {
    //         // console.log(obj1,obj2);
    //       return true;
    //     }

    //     // Handle cases where one is null or both are not objects
    //     if (
    //       obj1 === null ||
    //       obj2 === null ||
    //       typeof obj1 !== "object" ||
    //       typeof obj2 !== "object"
    //     ) {
    //         console.log(obj1,obj2);
    //       return false;
    //     }

    //     // Get keys of both objects
    //     let obj1Keys = Object.keys(obj1);
    //     let obj2Keys = Object.keys(obj2);

    //     // Check if they have the same number of keys
    //     if (obj1Keys.length !== obj2Keys.length) {
    //       return false;
    //     }

    //     // Recursively check each key
    //     for (let key of obj1Keys) {
    //       if (!obj2Keys.includes(key) || !isDeep(obj1[key], obj2[key])) {
    //         return false;
    //       }
    //     }

    //     return true;
    //   }

    //   // Example usage
    //   const obj1 = { a: 1, b: { c: 2, d: [3, 4] } };
    //   const obj2 = { a: 1, b: { c: 2, d: [2, 4] } };

    //   let ans = isDeep(obj1, obj2);
    //   console.log(ans); // Output: false


    //   let arr = []
    // for(let i=0;i<Array.length;i++){

    // }


    // function reverseString(str){
    //     let arr = str.split('');

    //     let left = 0;
    //     let right = arr.length-1;

    //     while(left<right){
    //         [arr[left],arr[right]] = [arr[right],arr[left]];
    //         left++;
    //         right--;
    //     }
    //     return arr.join('');
    // }
    // let ans = reverseString('sarab');
    // console.log(ans);

    // Online Javascript Editor for free
    // Write, Edit and Run your Javascript code using JS Online Compiler
    // var DOMParser = require('xmldom').DOMParser;
    var fs = require('fs');

// function parseCoordinates(xmlString) {
//     // Parse the XML string
//     var parser = new DOMParser();
//     var xmlDoc = parser.parseFromString(xmlString, "text/xml");

//     // Extract the <coordinates> content using getElementsByTagName
//     var coordinatesText = xmlDoc.getElementsByTagName("coordinates")[0].textContent.trim();

//     // Split the content into individual coordinate pairs
//     var coordinatePairs = coordinatesText.split(/\s+/);

//     // Convert each coordinate pair into an object
//     var coordinatesArray = coordinatePairs.map(function (pair) {
//         var parts = pair.split(",").map(Number);
//         return { longitude: parts[0], latitude: parts[1] };
//     });

//     return coordinatesArray;
// }

//  const xmlData = `
//  <coordinates>
//               77.619598,12.811479,0
//               77.62171,12.820862,0
//               77.622161,12.82058,0
//               77.627183,12.81693,0
//               77.627285,12.812804,0
//               77.650056,12.813752,0
//               77.650632,12.802818,0
//               77.654827,12.80057,0
//               77.657542,12.799887,0
//               77.660546,12.798046,0
//               77.666484,12.810338,0
//               77.669328,12.812338,0
//               77.69878,12.806637,0
//               77.71247,12.811072,0
//               77.718993,12.833962,0
//               77.728994,12.851243,0
//               77.733488,12.874393,0
//               77.765296,12.876912,0
//               77.77216,12.86182,0
//               77.789004,12.861213,0
//               77.802415,12.869246,0
//               77.811958,12.878914,0
//               77.819538,12.894577,0
//               77.835803,12.898991,0
//               77.864206,12.907213,0
//               77.840954,12.932765,0
//               77.815439,12.958949,0
//               77.820289,12.975886,0
//               77.805912,12.992927,0
//               77.780272,12.9879,0
//               77.78206,13.007736,0
//               77.784819,13.051422,0
//               77.763107,13.073505,0
//               77.741104,13.102086,0
//               77.730943,13.131225,0
//               77.735407,13.144094,0
//               77.73867,13.156796,0
//               77.746729,13.168958,0
//               77.748983,13.177048,0
//               77.742825,13.2189,0
//               77.682742,13.2224,0
//               77.674475,13.215207,0
//               77.653098,13.216786,0
//               77.646489,13.214216,0
//               77.603564,13.21914,0
//               77.597954,13.172858,0
//               77.593922,13.162209,0
//               77.578646,13.161637,0
//               77.570755,13.155475,0
//               77.568495,13.147896,0
//               77.568948,13.131983,0
//               77.576506,13.119609,0
//               77.569624,13.114396,0
//               77.473536,13.055038,0
//               77.467983,12.98551,0
//               77.46383,12.919005,0
//               77.46926,12.898422,0
//               77.496589,12.869986,0
//               77.556735,12.847183,0
//               77.619598,12.811479,0
//             </coordinates>
//             `

//   const result = parseCoordinates(xmlData);
//   console.log(result);


//  coordinates = [
//         [
//             [72.804868, 19.146859],
//             [72.803613, 19.143686],
//             [72.801349, 19.140625],
//             [72.809943, 19.134777],
//             [72.819642, 19.120079],
//             [72.821595, 19.114777],
//             [72.822947, 19.109698],
//             [72.8240754, 19.1041725],
//             [72.8256435, 19.0987586],
//             [72.8257216, 19.0985485],
//             [72.825793, 19.098365],
//             [72.8259277, 19.0974405],
//             [72.8260987, 19.0962422],
//             [72.8261855, 19.0956317],
//             [72.8262724, 19.0949996],
//             [72.8263542, 19.0920771],
//             [72.8265352, 19.0893561],
//             [72.8257708, 19.0863626],
//             [72.8246202, 19.0839467],
//             [72.8247649, 19.0828726],
//             [72.8245663, 19.0815348],
//             [72.8237718, 19.0804569],
//             [72.8228178, 19.0798919],
//             [72.8213685, 19.0770775],
//             [72.8215216, 19.0748578],
//             [72.8213416, 19.0725773],
//             [72.8226543, 19.0692425],
//             [72.8223514, 19.0680026],
//             [72.8230003, 19.0654936],
//             [72.8225177, 19.0638675],
//             [72.8214169, 19.0622666],
//             [72.8213567, 19.061155],
//             [72.820436, 19.059023],
//             [72.82103, 19.058339],
//             [72.823147, 19.057026],
//             [72.823926, 19.05576],
//             [72.823939, 19.054809],
//             [72.82285, 19.054429],
//             [72.82196, 19.053466],
//             [72.821064, 19.050647],
//             [72.81888, 19.046286],
//             [72.816992, 19.044197],
//             [72.818221, 19.041058],
//             [72.820586, 19.041502],
//             [72.821637, 19.041613],
//             [72.821863, 19.041196],
//             [72.822228, 19.040526],
//             [72.823569, 19.04212],
//             [72.826707, 19.043344],
//             [72.829802, 19.044952],
//             [72.830907, 19.046661],
//             [72.832344, 19.048568],
//             [72.833416, 19.04939],
//             [72.835045, 19.049351],
//             [72.837553, 19.04986],
//             [72.845145, 19.052447],
//             [72.850627, 19.051884],
//             [72.854747, 19.054804],
//             [72.856978, 19.058698],
//             [72.860755, 19.056265],
//             [72.865046, 19.055453],
//             [72.86951, 19.058861],
//             [72.873286, 19.07038],
//             [72.871726, 19.074482],
//             [72.878608, 19.079628],
//             [72.878093, 19.082872],
//             [72.878779, 19.085954],
//             [72.887019, 19.084008],
//             [72.892856, 19.085164],
//             [72.891139, 19.089848],
//             [72.882899, 19.091146],
//             [72.883971, 19.095084],
//             [72.884013, 19.098779],
//             [72.88732, 19.104437],
//             [72.889723, 19.115274],
//             [72.890903, 19.119319],
//             [72.885131, 19.118498],
//             [72.879681, 19.117099],
//             [72.878479, 19.113308],
//             [72.877985, 19.10983],
//             [72.872428, 19.112192],
//             [72.858781, 19.116085],
//             [72.855875, 19.117071],
//             [72.856807, 19.12018],
//             [72.85718, 19.123855],
//             [72.855948, 19.130236],
//             [72.85574, 19.135717],
//             [72.855273, 19.141116],
//             [72.84891, 19.139318],
//             [72.844275, 19.140291],
//             [72.836036, 19.14175],
//             [72.833117, 19.143696],
//             [72.825908, 19.140453],
//             [72.819878, 19.144426],
//             [72.818204, 19.139844],
//             [72.804868, 19.146859]
//         ]
//     ]
// coordinates = [
//     [
//         [72.8047938, 19.1467784, 0],
//         [72.803399, 19.1435956, 0],
//         [72.8011889, 19.1404534, 0],
//         [72.8096865, 19.1342707, 0],
//         [72.819278, 19.1197553, 0],
//         [72.8212576, 19.1146104, 0],
//         [72.8227221, 19.1090601, 0],
//         [72.823972, 19.1036111, 0],
//         [72.8247794, 19.1007371, 0],
//         [72.8257797, 19.0982026, 0],
//         [72.8262571, 19.0948163, 0],
//         [72.8262625, 19.0917949, 0],
//         [72.826461, 19.0892527, 0],
//         [72.825702, 19.0862047, 0],
//         [72.8245137, 19.0838056, 0],
//         [72.8247042, 19.0826066, 0],
//         [72.8245297, 19.0814482, 0],
//         [72.8237425, 19.0803189, 0],
//         [72.8227085, 19.0797271, 0],
//         [72.8219714, 19.0781487, 0],
//         [72.8212735, 19.076921, 0],
//         [72.8214681, 19.0746915, 0],
//         [72.8212765, 19.0723809, 0],
//         [72.822593, 19.0690594, 0],
//         [72.8222665, 19.0678306, 0],
//         [72.8229543, 19.0653525, 0],
//         [72.8224563, 19.0636689, 0],
//         [72.8213575, 19.0621069, 0],
//         [72.8213045, 19.0610149, 0],
//         [72.8202758, 19.0588106, 0],
//         [72.8209306, 19.0580907, 0],
//         [72.822899, 19.0568915, 0],
//         [72.8237573, 19.0556087, 0],
//         [72.8237841, 19.0547239, 0],
//         [72.822787, 19.0543674, 0],
//         [72.8217522, 19.0533492, 0],
//         [72.8209354, 19.0507082, 0],
//         [72.8187843, 19.0462867, 0],
//         [72.8167246, 19.0441161, 0],
//         [72.8173121, 19.0425114, 0],
//         [72.8180286, 19.0408254, 0],
//         [72.8176714, 19.0387571, 0],
//         [72.816885, 19.0360194, 0],
//         [72.8156128, 19.0309904, 0],
//         [72.8138125, 19.0236159, 0],
//         [72.811583, 19.0163835, 0],
//         [72.8121429, 19.0143645, 0],
//         [72.8132178, 19.0130759, 0],
//         [72.8146574, 19.0127002, 0],
//         [72.8154105, 19.0121216, 0],
//         [72.8157392, 19.0126687, 0],
//         [72.8156591, 19.0131214, 0],
//         [72.8137557, 19.0134286, 0],
//         [72.8127193, 19.0145033, 0],
//         [72.8127105, 19.0158456, 0],
//         [72.8149458, 19.025331, 0],
//         [72.8169667, 19.0335383, 0],
//         [72.8180846, 19.037642, 0],
//         [72.8187723, 19.0394098, 0],
//         [72.8206187, 19.0412182, 0],
//         [72.8215447, 19.041317, 0],
//         [72.8222561, 19.0401177, 0],
//         [72.8235856, 19.041814, 0],
//         [72.8267047, 19.0430131, 0],
//         [72.8298978, 19.0446812, 0],
//         [72.8310311, 19.046471, 0],
//         [72.8324756, 19.0482504, 0],
//         [72.833416, 19.048964, 0],
//         [72.8350432, 19.0490691, 0],
//         [72.837357, 19.0488294, 0],
//         [72.837997, 19.0481029, 0],
//         [72.8359656, 19.0473206, 0],
//         [72.8364447, 19.0459298, 0],
//         [72.8379609, 19.0430063, 0],
//         [72.8377067, 19.0395351, 0],
//         [72.8381607, 19.0361653, 0],
//         [72.8346891, 19.0271332, 0],
//         [72.8316016, 19.0231445, 0],
//         [72.8280422, 19.0205352, 0],
//         [72.8234355, 19.0177446, 0],
//         [72.8194676, 19.0188879, 0],
//         [72.8190071, 19.0213056, 0],
//         [72.8180316, 19.0230742, 0],
//         [72.8164025, 19.024755, 0],
//         [72.8153312, 19.0237987, 0],
//         [72.8158853, 19.0185331, 0],
//         [72.8161602, 19.0139776, 0],
//         [72.8154123, 19.0107798, 0],
//         [72.8123471, 19.0071762, 0],
//         [72.8097134, 19.0005343, 0],
//         [72.8113284, 18.9936896, 0],
//         [72.8093006, 18.9887037, 0],
//         [72.8095902, 18.986315, 0],
//         [72.8121328, 18.984332, 0],
//         [72.8099924, 18.980581, 0],
//         [72.810038, 18.9825811, 0],
//         [72.8097603, 18.9837231, 0],
//         [72.8086243, 18.98381, 0],
//         [72.8080717, 18.9820374, 0],
//         [72.8087208, 18.9805083, 0],
//         [72.8042684, 18.9781804, 0],
//         [72.8011144, 18.9718201, 0],
//         [72.7988185, 18.9630651, 0],
//         [72.7977136, 18.9582818, 0],
//         [72.7945488, 18.9543913, 0],
//         [72.7915982, 18.9491004, 0],
//         [72.7913945, 18.9454331, 0],
//         [72.7928616, 18.9440393, 0],
//         [72.7929983, 18.9420367, 0],
//         [72.7921265, 18.9388568, 0],
//         [72.793701, 18.9384778, 0],
//         [72.7953249, 18.9408759, 0],
//         [72.7960906, 18.94368, 0],
//         [72.7983087, 18.9466091, 0],
//         [72.7990316, 18.9476068, 0],
//         [72.8033593, 18.9493351, 0],
//         [72.8072086, 18.9535222, 0],
//         [72.8085849, 18.9544042, 0],
//         [72.8129653, 18.9529321, 0],
//         [72.8191938, 18.9483235, 0],
//         [72.8226713, 18.9426553, 0],
//         [72.8236166, 18.9370276, 0],
//         [72.8219442, 18.9309129, 0],
//         [72.8173537, 18.9254476, 0],
//         [72.8244534, 18.9216662, 0],
//         [72.8238834, 18.9190853, 0],
//         [72.8222405, 18.916545, 0],
//         [72.8189333, 18.918021, 0],
//         [72.8153685, 18.9184413, 0],
//         [72.8155066, 18.9164491, 0],
//         [72.8163314, 18.915756, 0],
//         [72.8152343, 18.9142074, 0],
//         [72.8140085, 18.9123746, 0],
//         [72.8118387, 18.9119221, 0],
//         [72.8102455, 18.9126817, 0],
//         [72.8089098, 18.914172, 0],
//         [72.8077456, 18.9141399, 0],
//         [72.806839, 18.9134581, 0],
//         [72.8039639, 18.9087624, 0],
//         [72.8028913, 18.9030517, 0],
//         [72.8067117, 18.895, 0],
//         [72.8054248, 18.8874356, 0],
//         [72.8135781, 18.8943657, 0],
//         [72.8185562, 18.9031227, 0],
//         [72.8184169, 18.906415, 0],
//         [72.8204957, 18.9073295, 0],
//         [72.8207626, 18.9090453, 0],
//         [72.8219737, 18.9099491, 0],
//         [72.8252114, 18.9073313, 0],
//         [72.8269039, 18.9101132, 0],
//         [72.8315285, 18.9140752, 0],
//         [72.8351235, 18.9223405, 0],
//         [72.838783, 18.919914, 0],
//         [72.840726, 18.9207352, 0],
//         [72.8392513, 18.9238657, 0],
//         [72.8414245, 18.9243575, 0],
//         [72.8447565, 18.9285841, 0],
//         [72.844784, 18.934475, 0],
//         [72.8401398, 18.9386656, 0],
//         [72.840345, 18.9420444, 0],
//         [72.8432873, 18.9552966, 0],
//         [72.8471982, 18.9668213, 0],
//         [72.8463886, 18.9774533, 0],
//         [72.8563784, 18.9980062, 0],
//         [72.8568074, 19.0053097, 0],
//         [72.8629873, 19.0083933, 0],
//         [72.868309, 19.0100161, 0],
//         [72.8726431, 19.0115579, 0],
//         [72.8730936, 19.0153313, 0],
//         [72.8754324, 19.0178063, 0],
//         [72.8765484, 19.0214176, 0],
//         [72.8817842, 19.0240551, 0],
//         [72.8930275, 19.0308304, 0],
//         [72.9004302, 19.0322299, 0],
//         [72.9078334, 19.0347649, 0],
//         [72.9097649, 19.037605, 0],
//         [72.9090787, 19.0406885, 0],
//         [72.9101081, 19.0466514, 0],
//         [72.9123352, 19.0559514, 0],
//         [72.9155089, 19.0614938, 0],
//         [72.9166658, 19.0656164, 0],
//         [72.9207303, 19.0682688, 0],
//         [72.9228207, 19.074166, 0],
//         [72.9213532, 19.0758178, 0],
//         [72.9185981, 19.0776317, 0],
//         [72.9180662, 19.0797996, 0],
//         [72.9235256, 19.0862443, 0],
//         [72.9283047, 19.0968648, 0],
//         [72.9325529, 19.1077525, 0],
//         [72.9376172, 19.1183967, 0],
//         [72.9386251, 19.1248839, 0],
//         [72.9364793, 19.1249649, 0],
//         [72.9322522, 19.1254516, 0],
//         [72.9304488, 19.1266272, 0],
//         [72.9309979, 19.1328439, 0],
//         [72.9283024, 19.134479, 0],
//         [72.9259502, 19.1302958, 0],
//         [72.9246949, 19.1257952, 0],
//         [72.9229944, 19.1258763, 0],
//         [72.9218947, 19.1267278, 0],
//         [72.9210283, 19.1311975, 0],
//         [72.9201617, 19.1355861, 0],
//         [72.919239, 19.1412419, 0],
//         [72.9163733, 19.1412994, 0],
//         [72.9150551, 19.140947, 0],
//         [72.9142734, 19.1403107, 0],
//         [72.9137584, 19.1395809, 0],
//         [72.9120928, 19.1389001, 0],
//         [72.9101395, 19.138316, 0],
//         [72.9080683, 19.1376786, 0],
//         [72.9064594, 19.1364445, 0],
//         [72.9035412, 19.1364445, 0],
//         [72.9014936, 19.1362832, 0],
//         [72.8976313, 19.138502, 0],
//         [72.8951313, 19.1433626, 0],
//         [72.8945949, 19.1476117, 0],
//         [72.8925993, 19.1512121, 0],
//         [72.8883721, 19.1563126, 0],
//         [72.8894342, 19.1626328, 0],
//         [72.8869771, 19.1633183, 0],
//         [72.8805773, 19.1650898, 0],
//         [72.8839432, 19.1667862, 0],
//         [72.8832753, 19.1721715, 0],
//         [72.881934, 19.1759986, 0],
//         [72.8806355, 19.1768671, 0],
//         [72.8706917, 19.1762011, 0],
//         [72.8585173, 19.1743781, 0],
//         [72.8529812, 19.1733849, 0],
//         [72.846186, 19.1742124, 0],
//         [72.8386544, 19.1742532, 0],
//         [72.83491, 19.1744356, 0],
//         [72.8323519, 19.1755035, 0],
//         [72.8302, 19.1757731, 0],
//         [72.8289963, 19.174253, 0],
//         [72.829621, 19.1728647, 0],
//         [72.8290842, 19.1700676, 0],
//         [72.8286764, 19.1687805, 0],
//         [72.8269331, 19.1670843, 0],
//         [72.828816, 19.1655806, 0],
//         [72.8298943, 19.1642998, 0],
//         [72.8301039, 19.1638392, 0],
//         [72.8304521, 19.1618863, 0],
//         [72.8307043, 19.1600015, 0],
//         [72.8304999, 19.1589402, 0],
//         [72.8307634, 19.157682, 0],
//         [72.8302216, 19.1566597, 0],
//         [72.8303502, 19.1548252, 0],
//         [72.8302969, 19.1546121, 0],
//         [72.8300498, 19.1544196, 0],
//         [72.8275607, 19.1543898, 0],
//         [72.8263376, 19.1519674, 0],
//         [72.8252437, 19.1511363, 0],
//         [72.8197288, 19.1443454, 0],
//         [72.8181085, 19.139957, 0],
//         [72.810872, 19.1448071, 0],
//         [72.8081118, 19.1465833, 0],
//         [72.8047938, 19.1467784, 0]
//     ]
// ]
// const bounds = coordinates[0].map(([longitude, latitude]) => ({
//     longitude,
//     latitude,
// }));

// console.log(bounds);
// fs.writeFileSync('output.json', JSON.stringify(bounds, null, 2));

//   console.log('Coordinates have been saved to output.json');

// variable = 10;


// (function fn(){

// variable = 100;
// console.log(variable);

// }())
// console.log(variable);

// function findDuplicates(numbers) {
//     let set = {};
//     for(let el of numbers){
//       console.log(el)
//       if(set.hasOwnProperty(el)){
//         return true;
//       }
//       else{
//         set[el] = 1;
//       }
//     }
//     return false;
//   }
//   let res = findDuplicates([10,7,0,0,9])
//   console.log(res)





// function classNames(...args) {
  
//     let result = "";
//     // console.log(args,'arguu')
//     for(let i=0;i<args.length;i++){
//       let arg = args[i];
  
//       if(typeof(arg) == 'object' && !Array.isArray(arg)){
//         let keys = [];
//         for(let key in arg){
//           if(arg[key] == true){
//             keys.push(key)
//           }
//         }
//         result += classNames(keys) +" ";
//       }
//       else if(Array.isArray(arg)){
//         result += classNames(...arg)+" ";
//       }
//       else{
//         result += arg+" ";
//       }
//     }
  
//     return result;
//   }
//   console.log(classNames(  'foo',
//   {
//     bar: true,
//     duck: false,
//   },
//   'baz',
//   { quux: true },),'resultt')



// function mergeData(sessions) {
   
//     let map ={};
    
//     for(let i=0;i<sessions.length;i++){
//       let session = sessions[i];
//       if(!map[session.user]){
//         map[session.user] = session;
//       }
//       else{
//         // console.log(map,session,'trr')
//         map[session.user] = {"user":session.user, "duration":parseInt(map[session.user].duration)+ parseInt(session.duration),"equipment":[...map[session.user].equipment,...session.equipment],
//        }
//         map[session.user].equipment = [...new Set( map[session.user].equipment)]
//       }
//     }
  
    
//     return Object.values(map).sort((a,b)=>{
//         return b.user - a.user
//     })
//   }

// console.log(mergeData([
//     { user: 8, duration: 50, equipment: ['bench'] },
//     { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//     { user: 8, duration: 50, equipment: ['bench'] },
//     { user: 7, duration: 150, equipment: ['bench', 'kettlebell'] },
//   ]))
// const add = (prev, curr) => prev + curr;

// Array.prototype.myReduce =(callbackFn, initialValue)=> {
  
//     let arr = this;
//   console.log(arr,'arrrr');
//     let val = initialValue ? callbackFn(initialValue,arr[0]) :arr[0];
//   console.log(val,'val');
//     for(let i=1;i<arr.length;i++){
//         console.log(arr[i],'dsdf');
//       if(arr[i]){
//         val = callbackFn(val,arr[i]);
//       }
     
//     }
//     return val;
//   };
//   let result = ['a', 'b', 'c', 'd'].myReduce(add,'');
//   console.log(result)


// function findDuplicates(numbers) {
//     let sett = new Set(numbers);
//     console.log(sett,'set');
//     console.log(numbers,'numbers')
//     return !(numbers.length === sett.size);
//   }
//   let result = findDuplicates([5,7,1,3]);
//   console.log(result);


// class TaskScheduler{
//     constructor(concurency =2){
//         this.taskQueue = [];
//         this.concurency = concurency;
//         this.runningTask = 0;
//     }

//     async runTask(task,delay){
//         return new Promise((resolve,reject)=>{
//             this.taskQueue.push({task,delay,resolve,reject});
//             this.processQueue();
//         })
//     }

//     async processQueue(){
//         if(this.runningTask >= this.concurency || this.taskQueue.length ==0){
//             return;
//         }

//         let {task,delay,resolve,reject} = this.taskQueue.shift();
//         this.runningTask +=1;
//         try{
//             setTimeout(async()=>{
//                 let result = await task();
//                 resolve(result)
//             },delay)
//         }
//         catch(err){
//             reject(err);
//         }
//         finally{
//             this.runningTask--;
//             this.processQueue();
//         }
//     }
// }
// const scheduler = new TaskScheduler(2); // Max 2 tasks running at a time

// // const task1 = () => new Promise(res => setTimeout(() => res("Task 1 Done"), 1000));
// const task2 = () => new Promise(res => setTimeout(() => res("Task 2 Done"), 500));
// const task3 = () => new Promise(res => setTimeout(() => res("Task 3 Done"), 2000));

// const task1 = function(){
//     return new Promise((res,reject)=>{
//         res("Task 1 dome")
//     })
// }
// scheduler.runTask(task1,2000).then(console.log); // Runs immediately
// scheduler.runTask(task2).then(console.log); // Runs immediately
// scheduler.runTask(task3).then(console.log); // Waits for one task to finish


// class TaskRunner{
//     constructor(){
//         this.queue = [];
//         this.result = [];
//     }
//     addTask(task){
//         this.queue.push(task);
//     }
//     async processTasks(){
//         if(this.queue.length ==0){
//             return;
//         }
       

//             for(let task of this.queue){
//                 try{
//                     let res = await task();
//                     this.result.push(res);
//                 }
//                 catch(err){
//                     console.log("error");
//                 }
                
    
//             }
//             return(this.result)
      
       
      
//     }
// }
// let taskRunner = new TaskRunner();
// let task1 = function(){
//     return new Promise((resolve,reject)=>{
//         resolve("task 1 complete")
//     })
// }
// let task2 = function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("task 2 complete")
//         },1200)
     
//     })
// }
// let task3 = function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("task 3 complete")
//         },1200)
     
//     })
// }
// taskRunner.addTask(task1);
// taskRunner.addTask(task2);
// taskRunner.addTask(task3);
// let ans = taskRunner.processTasks().then((data)=>{
//     console.log(data);
// })


// Auto-Retry for Promises

// const retryPromise= async(task,tries)=>{

//     const attempt = async(no)=>{

//         try{
//             let result = await task();
//             return result;
//         }
//         catch(err){
//             console.log(err,'err');
//             if(no<tries){
//                 // await new Promise((resolve) => setTimeout(resolve, 500));
//               return attempt(no+1);
//             }
//             else{
//                 // console.log("all attempts exhausted");
//                 return "all attempts exhausted";
//             }
//         }
//     }
//     return attempt(0);

// }

// const unStableTask = ()=>{
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             let random = Math.random();
//             // console.log(random,'ran');
//             if(random >= 0.5){
//                 resolve("Task completed")
//             }
//             else{
//                 reject("Task rejected")
//             }
//         },1200)
//     })
// }
// retryPromise(unStableTask,5).then((res)=>{
//     console.log(res);
// })
