console.log('bello mini boss');

(function ac(){
    let i;
    for(i =1; i<=15;i++){
        if(i%2==0){
            console.log(i + ' is even');
        }


    }

    console.log(i)
})();

const apple= (a,b) =>{
    console.log('apple');
    return a+b*a;
};

console.log(apple(2,3));

let stringgg= "heey yo its taneshow";
const revString = (words) => {
    return words.split("").reverse().join("");
}

let cars={
    model: "Tesla",
    color: "black",
    year: 2022,
    
}

cars.startEng = ()=> console.log("ready to go");

//DOM manipulation of text on web page
// let para = document.querySelector("p");
// para.textContent = para.textContent + " text content <br> yesyeys yes yes";
// para.innerHTML = para.innerHTML + "<br> tag is used in inner html yesyeys yes yes";

// // create button dynamically
// let parent = document.querySelector('#dynamicButton');
// let button = document.createElement('button');
// button.textContent = "button created!";
// parent.appendChild(button);

// radom no from max to min
let randomNum = (max, min)=>{
    return Math.floor(Math.random() * (max-min+1)+min);// as math.random gives in 0 to 9 with decimals
}
console.log(randomNum(200,100));

// higher order function(takes an array nd returns an array)
const array1 = [1,2,3,4,5,9,8,6,4];
const getsFiltered = (array1)=>{
    return array1.filter(num=>num%2==0);
}
console.log("new even no filtered array is "+ getsFiltered(array1));

//map methhod
const doubledArr= array1.map(num=>{
    return num*2
    });
console.log(doubledArr);
console.log(array1);

// find largest array using reduce()
const arr2= [10,20,30,40,50,60,70];
const largestNum = (arr)=>{
    return arr.reduce((acc,current)=>{
        return current > acc ? current : acc;
    })
}
console.log("largest no is "+ largestNum(array1));

// remove all the occurences of specified elements from an array
const arr3= [1,2,3,4,5,5,6,7,8,8,9];
const removeElements = (arr,target)=>{
    return arr.filter(item=>item!==target);
};
console.log("new array after removing "+ removeElements(arr3,5));

// Display Current Date and Time
let date = new Date();
console.log("current date and time is "+ date);
console.log(date.toLocaleTimeString());

//fix Error using try catch while api data calls
async function FetchApiData(){
    try{
        let response =await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let daata=await response.json();
        console.log(daata);
    }
    catch(errorrr){
        console.error("error in fetching data "+errorrr);
    }
}

FetchApiData();

// recursion for finding factorial


function factorial(n){ 
    if(n==1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
console.log(factorial(5));

// recursion for nth fibonaci

function fibonacci(n){ 
    if(n<=1){
        return n;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
console.log(fibonacci(10));

// counter func that returns count on each call using closure

// harkirat cohort


// week-1 

console.log("harkirat hello");

let firstName = "harkirat";
let age=18;
let isMarried = false;
console.log("hello "+firstName+" yashu di");
if(isMarried) console.log(firstName + "is not aMarried");
else console.log(firstName + " is a unmarried");

for(let i=0; i<5; i++){
    age++;
}
console.log(age);

const personArray = ["1", "2", "4"];
console.log(personArray[2]);

for(let i=0;i<personArray.length;i++){
    if(personArray[i]%2==0){
        console.log(personArray[i]);
    }
}

const alUsers = [{
    name: "chalu pandey",
    age: 11,
},{
    name: "amul goundi",
    age: 22,
}];

console.log(alUsers[1].name)
console.log(alUsers[1]["name"]);


console.log(n)
function sum22(a,b){
    return a + b;
}
var n=6;
let m=9;
console.log(sum22(n,m))

let sum44= (a,b) =>{
    return a+b;
}
console.log(sum44(n,m));

//call back function

function display(a,b, summm){
    let ans = summm(a,b)
    return ans
}

function sum(a,b){
    return a+b;
}
console.log(display(4,6,sum));

// set time out 

function fetchData(){
    setTimeout(() =>{
        console.log("data fetched")
    }
        ,5000);
}
console.log(fetchData()); 

// string 

function stringMethids(str, word){
    console.log("the og string "+str )
    console.log("length of string "+ str.indexOf(word));
}

stringMethids("hello mori maiya", "maiya");