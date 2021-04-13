// alert("hello world");
// console.log('Hello world');
// console.error('Hello world error');
// console.warn('Hello world warn');

// var,let,const

// let age=30;
// console.log(age);
// let score;
// score=30;
// console.log(score);

// const age=30
//  age=31;
//  console.log(age);

//  string,number,boolean,null,undefined
// const name='john';
// const age=30;
// const rating=4.5;
// const isCool=true;
// const x=null;
// const y=undefined;
// let z;
// console.log(typeof age);



// concatination
// const name='john';
// const age=30;
// console.log('my name is'+ name +'i am an'+ age);

// template string
// const hello='my name is  ${name} and i am an ${age}';
// console.log(hello);


// string metthod
// const s='hello world';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(''));


// Array

// const a=new  Array(1,2,3,4,5);

// const fruit=['apple','orange','paras'];
// console.log(fruit);
// console.log(fruit[1]);

// fruit.push('mango');
// fruit.unshift('mangolam');
// fruit.pop();
// console.log(Array.isArray('hello'));
// console.log(fruit.indexOf(mango));


// object=key value pair
// const person={
//     fname:'rama',
//     lname:'raj',
//     age:30,
//     hobbies:['music','cricket'],
//     address:{
//         street:'50 rama',
//         city:'patna',
//         state:'bihar'
//     }
// }
// console.log(person.fname);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
// const { fname,lname}=person;
// const { fname,lname, address:{city}}=person;
// console.log(person);


const todos=[
{
    id:1,
    text:'raj out',
    isCompleceted:true
},
{
    id:2,
    text:'rajesh out',
    isCompleceted:true
},
{
    id:3,
    text:'rajiv out',
    isCompleceted:false
},
];

// // send data to server
// const todoJSON=JSON.stringify(todos);
// console.log(todoJSON)

// loop
//   for
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// // while
// let i=0;
// while(i<10){
//     console.log('loop contain:${i}');
// }

for(let i=0;i<todos.length;i++){
console.log(todos[i].text);
}


















