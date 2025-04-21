
//Intro to ES
//ECMAscript- set of rules for JS( it should run on universally)
// read on ECMAscript

// ES6 (an update in ECMAscipt which came in 2015)
//it was a major updates:
//Arrow functions
//Arrow function
//create a function which takes a and b and returns a+b
// as an output
// do it in 2 ways:function declaration|function expression
//function declaration
// function add(a,b){
//     console.log(a+b)
//     return
// }
// add(1,5)
// // function expression
// let add=function(a,b){
//  return a+b;
// }
// console.log(add(1,2))

//implicity return
//"2"+2 implict example
//create an array function that takes an array and
// return the sum of all the values in that array
//[4,2,3,7,9]// 25

// let SumofArray= (arr)=> {
//     let sum =0
//     for(let i=0;i<arr.length;i++) {
//         sum=sum+arr[i]
//     }
//     return sum
// }
// let sum1=SumofArray([4,2,3,7,9])
// console.log(sum1)


//implicit function
// create a function which takes firstname and lastname
//and greets user
// let greet=(fn, ln)=> "hey"+fn+" "+ln+" ,"+welcome
// console.log(greet("chota", "bheem"))

//arrow function must not be used as Object methods
//this keyword=> it doesn't works with arrow function


//ES=> EcmaScript
//a ser of rules for JS implementation \, so that JS Implementation remains universal
//throughout developer community and the
// browsers
//arrow function
//let add=(a,b)=>a+b

//Destructuring


//floor1floor2floor3
// //destructining floor1 floor2 floor3
// let Mobile={
// title:"Good MObile",
// ram: '128GB',
// processor: "680 Snapdragan",
// apps: ["chrome", "palystore", "candyCrush"],

// }
// let{title,   ram,   processor,   app} = Mobile

// //Mobile.title
// console.log(title)
// console.log(apps[1])

//given an object destructure it
//let user={username: "bheem",
// 
//userDesignation
//skills
//softskills
// let{userdesignation,   skills}=user
// console.log(userdesignation)
// console.log(skills)
// console.log(skills.softskills)

// let{userdesignation,   skill:{softskills, techskills}=user
// console.log(softskills)
// console.log(user.skills)

// let obje={
//     a:{
//         b:{
//             c:{
//                 d:{

//                 }
//             }
            
//         }
//     }
// }


// let arr=[1,2,3,4,5]
// let [a,b,c,d,e] = arr


// let a=10;
// let b=20;
// [a,b]=[b,a]
// console.log(a,b)
// destruvtured swapping


//spreading
// let arr=[1,2,3,4,5]
// let arr2=[6,7,8,9,10]
// //how do i geta fin=[1,2,3,4,5,6,7,8,,9,10]
// let fin=[...arr, ...arr2]

// //fin=[arr]
// console.log(fin)

// let obj1={
//     a:1,
//     b:2
// }
// let obj2={
//     c:3,
//     d:4
// }
//let fin={...obj1, ...obj2.}

//ternary operators
//optional chaining
// let Switch=true
// console.log(Switch ? "Switch on" : "Switch off")
// let marks=80;
// if(marsk>=90){
//     console.log("A")
//  } else if(marks>=70){
//         console.log("B")
//     }
//     else{
//         console.log("C")
//     }
// console.log(marks>=90? "A":marks>=70 ? "B":"C")

//CREATA a function which takes blood type and you do atest 
//via ternary operations

// if(bloodType=="A"){
//     return "you are A blood type"
// }
//optional chaining* 







//2nd class
console.log(a+b)
var a =20
var b=30
console.log(c+d)
let c=a+b
console.log(c+b)
const d=50