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
let para = document.querySelector("p");
para.textContent = para.textContent + " text content <br> yesyeys yes yes";
para.innerHTML = para.innerHTML + "<br> tag is used in inner html yesyeys yes yes";

// create button dynamically
let parent = document.querySelector('#dynamicButton');
let button = document.createElement('button');
button.textContent = "button created!";
parent.appendChild(button);

// radom no from max to min
let randomNum = (max, min)=>{
    return Math.floor(Math.random() * (max-min+1)+min);// as math.random gives in 0 to 9 with decimals
}
console.log(randomNum(200,100));