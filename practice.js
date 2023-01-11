/*let double = 1;
while(double <= 10){
    console.log(double);
    double += 1;
}

let doubles = 1;


do{
    console.log(doubles);
    doubles++;
}while(doubles <= 10)



for(let double=1; double <= 10; double+=1){
    console.log(double);

}



let num = 50
while(num <= 100){
    console.log(num);
    num += 1;
}


let nums = 50
do{
    console.log(nums);
    nums +=1;
}while(nums <= 100)



for(var nos = 50; nos <= 100; nos +=1){
    console.log(nos);
}




const cars = ["audi","bmw","volvo","camero","benz","lamborgini"];

let texts = "";

for(let i=0; i<cars.length; i++){
    texts+=cars[i] + "<br>"
}

document.getElementById("demo").innerHTML = texts;



const cars = ["audi","bmw","volvo","camero","benz","lamborgini"];

let texts = "";

let i=0;
while(i<cars.length){
    texts += cars[i] + "<br>";
    i++;
    console.log(cars);
}

document.getElementById("demo").innerHTML = texts;



// objects

const car = {type:"ford", model:"mustang", color:"blue"};

document.getElementById("demo").innerHTML = "your car is "+ car.model;



function tocelcius(x) {
    return (5/9) * x-32;
}

document.getElementById("demo").innerHTML = tocelcius(window.prompt("enter farhenhit"))



let x = 3.14;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
x = Math.pow(x,3);

document.getElementById("demo").innerHTML = x;




let count = 0;
document.getElementById("decbtn").onclick = function(){
    count -=1;
    document.getElementById("labelname").innerHTML = count;
}

document.getElementById("resbtn").onclick = function(){
    count = 0;
    document.getElementById("labelname").innerHTML = count;
}

document.getElementById("incbtn").onclick = function(){
    count +=1;
    document.getElementById("labelname").innerHTML = count;
}



// string method;

let x = "cooper  ";
let y = "Raghavulu Naidu"
let c = "   Coooper Rocks   "

document.getElementById("demo").innerHTML = x.length;
console.log(x.charAt(3));
console.log(x.indexOf('o'));
console.log(x.lastIndexOf('o'));
console.log(x.trim())

let upper = x.toUpperCase();
let lower = y.toLowerCase();
console.log(upper);
console.log(lower);
console.log(lower.concat());
console.log(y.replace("Raghavulu","Rakesh"));
console.log(y.replaceAll("a","o"));

let z = x.concat(" ",y);
console.log(z);
console.log(c.length);
let ts = c.trimStart();
let te = c.trimEnd();
console.log(ts.length);
console.log(te.length);

let num = "4";

let ps = num.toString();

console.log(ps.padStart(4,"x"));
console.log(ps.padEnd(4,"x"));



let k = x.replace("cooper" , "copper");
let t = x.replaceAll("o","a");
console.log(k);
console.log(t);

console.log(x.charCodeAt("R"))


let fullname = "Raghavulu Naidu";

let firstname = fullname.slice(0,9);
let lastname = fullname.slice(10);
console.log(firstname);
console.log(lastname);

let fullName = "Rakesh M";
let firstName = fullName.slice(0,fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log("FirstName: " +firstName);
console.log("lastName: " +lastName);

let str = "Raghavulu Naidu";

console.log(str.substr(10,3));

let r = "a,b,c,d,e,f,g,h,i,j,k";

const arry = r.split(",");
console.log(arry);


n = 12345;
nn = new Number(12345)
console.log(nn);



// array..

let fruits = ["apple", "weed", "promogranate"]

//fruits[2] = "pineapple";
fruits.push("orange")
fruits.pop()
fruits.unshift("mango");
fruits.shift();
//document.getElementById('demo').innerHTML = fruits;

let prices = [5, 10, 15, 20, 25];
prices[prices.length] = 35;
for(let i = 0; i < prices.length; i+=1){
    //end = prices[i];
    document.getElementById('demo').innerHTML = prices[i];
    console.log(prices[i]);
}

for(let j = prices.length; j > 0; j-=1){
    document.getElementById('demo').innerHTML = prices[j];
    console.log(prices[j]);
}



let a = ["Cooper", "Rakesh", "Raghavulu Naidu"];
let b = ["MGR", "Jayalalitha", "EPS", "OPS"];
let c = ["Annadurai", "Monda", "Wigstalin"]
z = a.concat(b,c); 
//document.getElementById('demo').innerHTML = z;

a.splice(1,0, "RK_cooper");
console.log(a);
//document.getElementById('demo').innerHTML = a;

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1,3);
//document.getElementById('demo').innerHTML = citrus;


let k = b.sort();
let r = b.reverse();
//document.getElementById('demo').innerHTML = b;

let dim = [a,b,c];

*/

//


/*let textes = "";
for(let op=0; op <= a.length; op++){
    textes += a[op] + "<br>"
    document.getElementById('demo').innerHTML = textes;
} 

let txt = "";
for(x in a){
    txt += a[x]+ "<br>"
    document.getElementById('demo').innerHTML = txt;
} 


// array.forEach captialize string


let a = ["Cooper", "Rakesh", "Raghavulu Naidu"];
let b = ["MGR", "Jayalalitha", "EPS", "OPS"];
let c = ["Annadurai", "Monda", "Wigstalin"]

a.forEach(captialize);
a.forEach(print);

function captialize(element,index,array){
    array[index] = element[0].toUpperCase()+element.slice(1);
}

//console.log(a[1]);
//document.getElementById('demo').innerHTML = a[0];

function print(value){
    console.log(value);
}



let abs = ["Cooper", "Rakesh", "Raghavulu Naidu"];
let b = ["MGR", "Jayalalitha", "EPS", "OPS"];
let c = ["Annadurai", "Monda", "Wigstalin"]

let tat = "";
let tbt = "";
let tct = "";

for(let i = 0; i <= abs.length; i++){
    tat += abs[i] + "<br>";
}
//console.log(tat)
//document.getElementById('demo').innerHTML = tat;

for(let x in abs){
    tbt += abs[x] + "<br>";
}
//document.getElementById('demo').innerHTML = tbt;

for(let x of abs){
    tct += x + "<br>";
}
//document.getElementById('demo').innerHTML = tct;



// map method

const cart = new Map([
    ["shirt", 40],
    ["pant", 60],
    ["boxer",40],
    ["shoe", 70]
]);

//get
let shopping = 0
shopping += cart.get("pant")
shopping += cart.get("shirt")
console.log(shopping);
//set
cart.set("mask",5);
cart.set("pant",70); // we even change values..
// delete
cart.delete("pant");
// has
console.log(cart.has("mask"));

// size
console.log(cart.size);
cart.forEach((value, key) => console.log(key+" $"+value));




// array map

const number = [1,2,3,4,5,6,7,8,9,10];
number1 = number.map(sqrmap);
number1.forEach(print);

function sqrmap(value){
    return Math.pow(value ,2);
}

function print(value){
    console.log(value);
    document.getElementById('demo').innerHTML = value;
}


//array.filter
const number = [12,25,22,19,18,16,90,78];
number1 = number.filter(sqrmap);
number1.forEach(print);

function sqrmap(value){
    return value >= 17;
}

function print(value){
    console.log(value);
    document.getElementById('demo').innerHTML = value;
}



//array.reduce
const number = [12,25,22,19,18,16,90,78];
number1 = number.reduce(Total);
//number1.forEach(print);
document.getElementById('demo').innerHTML = number1;

function Total(total, value){
    return total + value;
}

function print(value){
    console.log(value);
    document.getElementById('demo').innerHTML = value;
}





const num = [60,20,50,100,30,90,70,10,40,80];

//let des = num.sort(descendingOrder);
let des = num.sort(ascendingOrder);
des.forEach(print);

function descendingOrder(x,y){
    return y-x;
}

function ascendingOrder(x,y){
    return x-y;
}

function print(value){
    console.log(value);
    document.getElementById('demo').innerHTML = value;
}



//function expression;
const greet = function(){
    document.getElementById('demo').innerHTML = "Hello";
    
}

greet();



let count = 0;

function ins(){
    count+=1;
    document.getElementById('labelname').innerHTML = count;
}

function des(){
    count-=1;
    document.getElementById('labelname').innerHTML = count;
}



let count = 0;

document.getElementById('incbtn').onclick = function(){
    count +=1;
    document.getElementById('labelname').innerHTML = count;
}


document.getElementById('decbtn').onclick = function(){
    count -=1;
    document.getElementById('labelname').innerHTML = count;
}




// set methods:

const letters = new Set(["a","b","c"]);

document.getElementById('demo').innerHTML = letters;



// arrow function

//const welcome = (username) =>(document.getElementById('demo').innerHTML = "Hello "+username);
//welcome("Cooper");


const percent = (x,y)=> {return x / y * 100;}
document.getElementById('demo').innerHTML = percent(37,50)+"%";



const des = [50,80,40,10,25,90,70,100];
des.sort((x,y) => (y-x));
des.forEach((value) => (console.log(value)));



let userName = "cooper";
let userInbox = 0;

function login(){
    DisplayuserName();
    DisplayuserInbox();

    function DisplayuserName(){
        console.log("Welcome "+userName);
    }
    
    function DisplayuserInbox(){
        console.log("Hello "+userName+" you have "+userInbox+" messages");
    }
}

login();



const car1 = {
    Model : "Ford Mustang",
    color : "Blue",
    year : 2023,

    drive : function(){
        console.log("You driving the car "+this.Model);
    },

    brake : function(){
        console.log("You braking the car")
    }
}

const car2 = {
    Model : "Ambassidor",
    color : "White",
    year : 2023,

    drive : function(){
        console.log("You driving the car "+this.Model);
    },

    brake : function(){
        console.log("You braking the car")
    }
}


car1.drive();
car2.drive();


// class

class Player {
    score = 0;

    pause(){
        console.log("You pause the game");
    }

    exit(){
        console.log("You exit the game");
    }
}

const player1 = new Player;
const player2 = new Player;
player1.score += 1;
console.log(player1.score);
console.log(player2.score);
player1.pause();
player2.pause();


// constructor
class Student {
    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(this.name+" is studying for exam");
    }
}

student1 = new Student("Cooper",25,8.3);
student2 = new Student("Oliver",49,7.5);
console.log("name = "+student1.name ,"age = "+student1.age,"gpa = "+ student1.gpa);
console.log("name = "+student2.name ,"age = "+student2.age,"gpa = "+ student2.gpa);
student1.study();
student2.study();




//static

class Car{
    static NumberOfcars = 0;
    constructor(model){
        this.model = model;
        Car.NumberOfcars =+ 1;
    }
    
    static StartRace(){
        console.log("3...2...1...0..GO!!!!");
    }

}

const car1 = new Car("Ford");
const car2 = new Car("Toyota");
const car3 = new Car("Honda");
//console.log(car1.NumberOfcars);
//console.log(car2.NumberOfcars);
//console.log(car3.NumberOfcars);
console.log(Car.NumberOfcars)
Car.StartRace();



//inheritance 

class Animal{
    alive = true;

    eat(){
        console.log("This "+this.name+" is eating");
    }

    sleep(){
        console.log("This "+this.name+" is sleeping"); 
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log("This "+this.name+" is running"); 
    }
}

class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log("This "+this.name+" is flying"); 
    }
}

class Fish extends Animal{
    name = "fish";

    swim(){
        console.log("This "+this.name+" is swimming"); 
    }
}


const rabbit = new Rabbit;
const hawk = new Hawk;
const fish = new Fish;


rabbit.eat();
rabbit.sleep();
rabbit.run();
console.log(rabbit.alive);

hawk.eat();
hawk.sleep();
hawk.fly();
console.log(hawk.alive);

fish.eat();
fish.sleep();
fish.swim();
console.log(fish.alive);


let num = 12;

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
}
class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}

const rabbit = new Rabbit("rabbit",2,35);
const hawk = new Hawk("hawk",3,45);
const fish = new Fish("fish",4,55);

console.log(rabbit.name);
console.log(hawk.name);
console.log(fish.name);

console.log(rabbit.age);
console.log(hawk.age);
console.log(fish.age);

console.log(rabbit.runSpeed);
console.log(hawk.flySpeed);
console.log(fish.swimSpeed);

console.log(isNaN);




// getter and setter

const person = {
    name:"Cooper",
    age:25,
    gpa:8.3,
    language:"English",
    spoken:"Not defined",
    
    get lang(){
        return this.language +" Medium";
    },

    set speak(value){
        this.spoken = value;
    }
}

person.speak = "Tamil";
console.log(person.lang);
console.log(person.spoken);




class Car {
    constructor(power,gas){
        this._power = power;
        this._gas = gas;
    }

    get power(){
        return this._power +"HP";
    }

    get gas(){
        return this._gas +"L "+ "("+this._gas / 50* 100+"%)";
    }

    set gas(value){
        if(value > 50){
            value = 50;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

car = new Car(400,25);
car.gas = 100;
console.log(car.power);
console.log(car.gas);




// passing object as arguments in function

class Car {
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

car1 = new Car("Lamborgini", 2023, "Black");
car2 = new Car("Toyota", 2022, "Red");
car3 = new Car("Mustang", 2024, "Blue");


ChangeColor(car3,"Purple")
DisplayInfo(car3);

function ChangeColor(car,color){
    car.color = color;
}

function DisplayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}



// array of objects

class Car {
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(this.model+" is driving the car");
    }
}

car1 = new Car("Lamborgini", 2023, "Black");
car2 = new Car("Toyota", 2022, "Red");
car3 = new Car("Mustang", 2024, "Blue");

const cars = [car1,car2,car3];

//console.log(cars[0].model);
//console.log(cars[1].model);
//console.log(cars[2].model);

//cars[2].drive();

DisplayInfoLoop(cars);


function DisplayInfoLoop(car){
let text = "";
    for(let x of car){
        x.drive();
        
                
    }
    //console.log(text);
}




// ananoyms objects

class Cards {
    constructor(value,unit){
        this.value = value;
        this.unit = unit;  
    }
}

let cards = [new Cards("A","Dimonds"),new Cards("A","Hearts"),
               new Cards("A","Spades"),new Cards("A","clubs")];
//console.log(cards[2].value,cards[2].unit);

cards.forEach((value,unit) => (console.log(cards[3].value,cards[3].unit)));




//error handling

try{
    let x = window.prompt("enter a number");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't number" ;
    if(x == "")  throw "Number is empty"
    console.log(x +" is a number");
}

catch(error){
    console.log(error);
}

finally{
    console.log("all is executed");
}



// type conversion;

//let x = "123";
//let y = window.prompt;
//let z = window.prompt;
//console.log(x,"is a", typeof x);
let x = Number(123); 
console.log(x,"is a", typeof x);
let y = String("It"); 
console.log(y,"is a", typeof y);
let z = Boolean("It"); 
console.log(z,"is a", typeof z);
console.log(isNaN(x));



//setTimeout.

price = 1000
let timer1 = setTimeout(DisplayOne, 500, price);
let timer2 = setTimeout(DisplayTwo, 2000);
let timer3 = setTimeout(DisplayThree, 3000);

function DisplayOne(price){
    alert("Click me please, you wont regret just Rs"+price+"/-!!!!!!!!!");
}

function DisplayTwo(){
    alert("Click me one more time, Please!!!!!");
}

function DisplayThree(){
    alert("Inga Onnum illa poi veliya parru...xD, c+++8")
}

document.getElementById("myBtn").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("TATA BYEEEEEEEEeeeee!!!!!")
}


let count = 0;
max = window.prompt("enter a number for delay");
max = Number(max);

let Timer = setInterval(CountUp, 1000);

function CountUp(){
    count += 1;
    document.getElementById('demo').innerHTML = count;
    if(count >= max){
        clearInterval(Timer);
    }
}






//let date = new Date(2023,10,23,17,31,20,5);
//let date = new Date("October 3 2023 00:00:00");
//date = date.toLocaleString();

let year = date.getFullYear();
let Month = date.getMonth();
let Day = date.getDay();
let days = date.getDate();
let hour = date.getHours();
let mins = date.getMinutes();


let date = new Date();
date.setFullYear(2025);
date.setMonth(6);
date.setHours(18);
date.setMinutes(25);



let date = new Date();
document.getElementById('demo').innerHTML = FormatTime(date);
function FormatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return day+"/"+month+"/"+year;
    
}


function FormatTime(date){
    let hour = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds(); 
    let amORpm = hour >= 12 ? "pm" : "am";

    hour = (hour % 12) || 12;
    return hour+":"+mins+":"+sec+" "+amORpm;

}



const mylabel = document.getElementById("MyLabel");

update();
setInterval(update, 1000);

function update(){

    let date = new Date();
    mylabel.innerHTML = FormatDate(date);

    function FormatDate(date){
        let hours = date.getHours();
        let mins = date.getMinutes();
        let sec = date.getSeconds();
        let amORpm = hours >= 12 ? "pm": "am";

        hours = hours%12 || 12;

        hours = FormatZero(hours);
        mins = FormatZero(mins);
        sec = FormatZero(sec);

        return hours+":"+mins+":"+sec+" "+amORpm;
    }

    function FormatZero(time){
        time = time.toString();
        return time.length < 2 ? "0"+time :time;
    }
}



//asynchronous and synchronous methods;

console.log("I love my pet dog");
setTimeout(() => console.log("Good Day!!!!!!!!!"), 3000);
console.log("His name is cooper");



//console.time() =  to track time to program run;

console.time("Response time :");
alert("click OK");
setTimeout(() => console.log("Good Day!!!!!!!!!"), 3000);
console.timeEnd("Response time :");




// promise pendind/fullfilling or rejected...

promise = new Promise((resolve, reject) => {
    let fileloaded = true;
    if(fileloaded){
        resolve("Fileloaded successfully");
    }
    else{
        reject("File not Loaded")
    }
});

promise.then((value) => console.log(value))
       .catch((error) => console.log(error));



promise = new Promise((resolve) => {

    setTimeout(resolve,3000);
    
});

promise.then(() => console.log("Thanks for waiting !!!") );


wait = time => new Promise((resolve) => {

    setTimeout(resolve,time);
    
});

wait(3000).then(() => console.log("Thanks for waiting !!!") );



// async returns a promise

async function loadfile(){
    let fileloaded = false;

    if(fileloaded){
        return "File Loaded";
    }
    else{
        throw "File Not Loaded";
    }
}


loadfile().then((value) => console.log(value))
       .catch((error) => console.log(error));



// method two
function loadfile(){
        let fileloaded = false;
    
        if(fileloaded){
            return Promise.resolve("File Loaded");
        }
        else{
            return Promise.reject("File Not Loaded");
        }
    }
    
    
loadfile().then((value) => console.log(value))
           .catch((error) => console.log(error));       




// await = makes an async function wait for promise

async function loadfile(){
    let fileloaded = false;

    if(fileloaded){
        return "File Loaded";
    }

    else{
        return "File not Loaded";
    }
}


async function runawait(){
    try{
        let message = await loadfile();
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}

runawait();

//loadfile().then((value) => console.log(value))
//          .catch((error) => console.log(error));



// import {PI, getCircumference, getArea} from "./math_util.js";

import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(15);
console.log(circumference);

let Area = MathUtil.getArea(15);
console.log(Area);



//DOM = Document object Module

// console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//document.title = "Suma-Killi";
//document.location = "http://www.google.com";
//document.body.style.backgroundColor = "lightblue";

document.getElementById("myTitle").style.backgroundColor = "lightgreen";

let fruits = document.getElementsByName("fruits");

//console.log(fruit[2]);

fruits.forEach(fruit =>{
    if(fruit.checked){
        console.log(fruit.value);
    }
});

let veggi = document.getElementsByTagName("li");

veggi[0].style.backgroundColor = "lightblue";



let desserts = document.getElementsByClassName("dessert");

desserts[0].style.backgroundColor = "lightblue";

let element = document.querySelector("#myTitle");

element.style.backgroundColor = "lightblue";


let elements = document.querySelectorAll(".dessert");

elements.forEach(element => {
    element.style.backgroundColor = "lightblue";
})



let element = document.querySelector("#fruit");
let child = element.children[1];
child.style.backgroundColor = "lightblue";



let element = document.querySelector("#veg");
let child = Array.from(element.children);
child.forEach(child => child.style.backgroundColor = "lightblue");



let element = document.querySelector("#dessert");
let child = Array.from(element.children);
child.forEach(child => child.style.backgroundColor = "lightgreen");




const nameTag = document.createElement("h1");
nameTag.innerHTML = "Cooper is Awesome";
document.body.append(nameTag);




let listContent = document.querySelector("#fruit");
let listItem = document.createElement("li");
listItem.textContent = "mango";
//listContent.append(listItem);
//listContent.prepend(listItem);
listContent.insertBefore(listItem,document.getElementsByTagName("li")[0]);



const title = document.getElementById("myTitle");

title.style.backgroundColor = "rgb(03, 10, 1997)";
title.style.color = "#fff";
title.style.textAlign = "center";



//let element = document.getElementById("something");
//let element = document.getElementById("myText");
let element = document.getElementById("myDiv");


//let element = document.body;
//element.onload = doSomething;
//element.onchange = doSomething;
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;



function doSomething(){
    //alert("Hey you just clicked me");
    element.style.backgroundColor = "lightgreen";
}

function doSomethingElse(){
    //alert("Hey you just clicked me");
    element.style.backgroundColor = "lightblue";
}




//addEventlisterner = (event, function, useCapture)
let innerDiv = document.getElementById("innerDiv");

innerDiv.addEventListener("mouseover", ChangeBlue);
innerDiv.addEventListener("mouseout", ChangeBack);

function ChangeBlue(){
    innerDiv.style.backgroundColor = "lightblue";
}

function ChangeBack(){
    innerDiv.style.backgroundColor = "lightgreen";
}



innerDiv.addEventListener("click", ChangeBlue);
outerDiv.addEventListener("click", ChangeBlue, true);

function ChangeBlue(){
    alert("First one was: "+this.id);
    this.style.backgroundColor = "lightblue";
}



let MyButton = document.getElementById("MyButton");
let myImg = document.getElementById("myImg");

//MyButton.addEventListener("click",() =>{
//    if(myImg.style.display == "none"){
//        myImg.style.display = "block";
//    }
//    else{
//        myImg.style.display = "none";
//    }
//});

MyButton.addEventListener("click", () =>{
    if(myImg.style.visibility == "hidden"){
        myImg.style.visibility = "visible";
    }
    else{
        myImg.style.visibility = "hidden";
    }
});



//window.addEventListener("keydown", event => console.log(event.key));

const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown",move);
let x = 0;
let y = 0;

function move(event){

    
 switch(event.key){
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=5;
            myDiv.style.top = y + "px"
            break;
        case "ArrowLeft":
            x-=5;
            myDiv.style.left = x + "px"
            break;
        case "ArrowRight":
            x+=5;
            myDiv.style.left = x + "px"
            break;
        default:
            break;                
    }
    
}



// string methods to practice.

let UserName = "Rakesh Cooper";
console.log(typeof UserName);
console.log(UserName.length);
//UserName = Number(UserName);
//console.log(typeof UserName);
console.log(UserName.charAt(10));
console.log(UserName.toUpperCase());
console.log(UserName.toLowerCase());
console.log(UserName.trim());
console.log(UserName.trimStart());
console.log(UserName.trimEnd());
let string = "Today we have a hot weather";
console.log(string);
let text = string.replace("hot","cold");
console.log(text);
let texts = UserName.replaceAll("o","@");
console.log(texts);

let text1 = "Hello ";
let text2 = "Cooper xD";
console.log(text1+text2);
let text3 = text1.concat("",text2);
console.log(text3);

let firstName = UserName.slice(0,UserName.search(" "));
let lastName = UserName.slice(UserName.indexOf(" "), 14);
console.log("Firstname:"+firstName);
console.log("Lastname:"+lastName);


let fn = UserName.substring(0, 7);
let ln = UserName.substring(7, 14);
console.log("Firstname:"+fn);
console.log("Lastname:"+ln);

let lnstr = UserName.substr(7,7);
console.log("Lastname:"+lnstr);

let num = "652";
let ps = num.padStart(10, "x");
console.log(ps);
ps = num.padEnd(10, "x");
console.log(ps);

console.log(UserName.search("Cooper"));




// array methods:

let myArr = ["Cooper","Rakesh","hitler","stalin","putin"];
let myArr2 = ["Banana","apple","mango","orange"];
let myArrPush = myArr.push("Tommy");
console.log(myArr);
let myArrPop = myArr.pop();
console.log(myArr);
let myArrUnshift = myArr.unshift("Zara");
console.log(myArr);
let myArrShift = myArr.shift();
console.log(myArr);

let conArr = myArr.concat(myArr2);
console.log(conArr);

let myArrSlice = myArr.slice(1,4);
console.log(myArrSlice);

let fruits = ["Banana","apple","mango","orange"];
fruits.splice(3,0,"lemon","kiwi");
console.log(fruits);


let strSplit = "How is your day today ?";
let myArrsplit = strSplit.split(" ");
console.log(myArrsplit);



// odd or even

let n = window.prompt("Enter a number")
n = Number(n);

if(n%2 == 0){
    document.getElementById("demo").innerHTML = n+" is a even number";
}
else{
    document.getElementById("demo").innerHTML = n+" is a odd number";
}



//swap numbers

let a = window.prompt("Enter a number for a");
a = Number(a);
let b = window.prompt("Enter a number for b");
b = Number(b);
console.log("before swap a: "+a+" "+"before swap b: "+b);
let c = a;
a = b;
b = c;
console.log("after swap a: "+a+" "+"after swap b: "+b);



// fizz buzz
let num = 30;
let a;
for(let i = 0; i <= num; i++){

    if(i%3 == 0 && i%5 == 0){
        console.log("FIZZBUZZ");
    }
    else if(i%3 == 0){
        console.log("FIZZ");
    }
    else if(i%5 == 0){
        console.log("BUZZ");
    }
    else{
        console.log(i);
    }
    
}


let myArr = ["Cooper","Rakesh","hitler","stalin","putin"];
 
console.log(myArr.sort());


let somer = [25,15,78,65,54,62,32,95,48,77,10,36,85,89];

let desc = somer.sort((a,b) => {return a-b});
console.log(desc);

let aesc = somer.sort((a,b) => {return b-a});
console.log(aesc);

let reverse = myArr.reverse();
console.log(reverse);



// object

let person = {
    fname: "Bradly",
    lname: "cooper",
    age: 28,
    fullname: function(){
        return "fname: "+this.fname+" and lname: "+this.lname;
    }
};

console.log(person.fullname());



// constructor

function call(){
    let a = 5;
    return a * a;
     
}
console.log(call());
document.getElementById("demo").innerHTML = call();




class Animal{
    name = "";
    eat(){
        console.log(this.name+" is eating");
    }

    sleep(){
        console.log(this.name+" is sleeping");
    } 
}

class Dog extends Animal{
    name = "dog"; 

    run(){
        console.log(this.name+" is runing");
    }
}

class Eagle extends Animal{
    name = "eagle"; 

    fly(){
        console.log(this.name+" is flying");
    }
}

let dog = new Dog();
let eagle = new Eagle();
let animal = new Animal();
animal.name = "your pet"
dog.eat();
dog.run();

eagle.eat();
eagle.fly();

animal.eat();



class Student {
    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(this.name+ "is studying");
    }
}

let student1 = new Student("Cooper",18,8.5);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();




class Animal{
    name= "";
    age = 0;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal{
    
    constructor(name, age, runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
        
}

let dog = new Dog("cooper",3,85);
console.log(dog.name);
console.log(dog.age);
console.log(dog.runSpeed);


 // map 

let store = new Map([
    ["pant", 120],
    ["t-shirt", 80],
    ["boxer", 40],
    ["mask", 20]
]);

store.set("pant",100);
store.set("gloves",50);
let shoppingCart = 0
shoppingCart += store.get("pant");
shoppingCart += store.get("mask");
shoppingCart += store.get("boxer");


console.log(store.has("boxer"));
console.log(store.size);
//store.clear();
//store.delete("pant");
store.forEach((value,key) => console.log(key +" $"+value));



// exercise;

//1. Write a JavaScript program that accept two integers and display the larger

greater();
function greater(){
    let a = 10;
    let b = 20;

    if(a > b){
        console.log(a+" is larger");
    }
    else if(a < b){
        console.log(b+" is larger");
    }
    else{
        console.log("both a"+a+" and b "+a+" is larger");
    }
}



//2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

sign();
function sign(){
    let a = -5;
    let b = -8;
    let c = -3;

    if(a > 0 && b > 0 && c > 0){
        alert("All three sign is +");
    }
    else if(a < 0 && b < 0 && c < 0){
    console.log("sign is - ");
    }
    else if(a > 0 && b < 0 && c < 0){
        console.log("sign is + ");
    }
    else if(a < 0 && b > 0 && c < 0){
        console.log("sign is + ");
    }
    else{
        console.log("sign is - ");
    }
}


// odd or even

for(let i = 0; i <= 25; i++){
    if(i%2 == 0){
        console.log(i+" is even");
    }
    else{
        console.log(i+" is odd");
    }
}



let a = [10,20,30,40,50];
let total = 0;

for(let i = 0; i <= a.length -1; i++){
    total += a[i];
    console.log(total);
}
document.getElementById("demo").innerHTML = total;


let a = 10;
let total = 0;

for(let i = 0; i <= a-1; i++){
    total += i;
    console.log(total);
}
document.getElementById("demo").innerHTML = total;


let txt = ""; 
const person = {fname:"John", lname:"Doe", age:25};
for(let x in person){
    txt += person[x]+ " ";
    document.getElementById("demo").innerHTML = txt;
}



//Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade
let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

let total = 0;
let avg ;
for(let i = 0; i < students.length; i++){
        let sum = total += students[i][1];
        avg = sum / students.length;
         
}
if(avg >= 90){
    console.log("You got an A grade");
    document.getElementById("demo").innerHTML = avg+ " You got an A grade";
}
else if(avg >= 80){
    console.log("You got an B grade");
    document.getElementById("demo").innerHTML = avg+ " You got an B grade";
}
else if(avg >= 70){
    console.log("You got an C grade");
    document.getElementById("demo").innerHTML = avg+ " You got an C grade";
}
else if(avg >= 60){
    console.log("You got an D grade");
    document.getElementById("demo").innerHTML = avg+ " You got an D grade";
}
else {
    console.log("You got an F grade");
}



// fizz buzz
let a = 50;
for(let i = 0; i <= a; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FIZZ BUZZ");
    }
    else if(i%3 == 0){
        console.log("FIZZ");
    }
    else if(i%5 == 0){
        console.log("BUZZ");
    }
    else {
        console.log(i);
    }

}



let txt = "";
for(let i = 0; i < 3; i++){
    txt += i ;
    for(let j = 10; j < 15; j++){
        txt += j;
    }
document.getElementById("demo").innerHTML = txt;    
}

reverse();
function reverse(){
    let txt;
    let str = "webmaster";
    for(let i = str.length; i >= 0; i--){
        txt += str[i] ;
        console.log(txt);
        document.getElementById("demo").innerHTML = txt;
    }
}



let arr = ["cooper", "rakesh", "vinay"];
arr.forEach(captialize);

function captialize(value, index ,array){
    array[index] = value[0].toUpperCase() + value.slice(1);
}
console.log(arr[0]);



// getter and setter;

class Car {

    fname = "Bradly";
    lname = "cooper";

    set ln(ln){
        
        this.lname = ln[0].toUpperCase() + ln.slice(1);
    
    }
    constructor(power){
        this._gas = 50;
        this._power = power;
    }

    get power(){
        return this._power +"hp";
    }
    
    get fullname(){
        return this.fname +" "+this.lname;
    }
    
    get gas(){
        return this._gas+"L("+this._gas/50*100+"%)";
    }

    set gas(value){
        
        if(value > 50){
            value = 50;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }

    
    
}

let car = new Car(500);
car.gas = 40;
car.ln = "max";
console.log(car.fullname);
console.log(car.power);
console.log(car.gas);
console.log(car.lname);



//nested loops

for(let i=0; i<3; i+=1){
    for(let j=0; j<4; j+=1){
        console.log(j);
    }
}


let sym = "$";
for(let i=0; i < 3; i+=1){
    for(let j=0; j < 5; j+=1){
        document.getElementById('demo').innerHTML += sym;
        
    }
    document.getElementById('demo').innerHTML += "<br>"
    
}



let text = "suma killi";

console.log(text.replace(/suma/i,"chuma"));

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
const person1 = {
    firstName:"John",
    lastName: "Doe"
  }

let apply = person.fullName.apply(person1);
let call = person.fullName.call(person1); 
  console.log(apply);
  console.log(call);


const person = {
    fullName: function(city,country) {
      return this.firstName + " " + this.lastName+" "+city+" "+country;
    }
  }
  
const person1 = {
    firstName:"John",
    lastName: "Doe"
  }

let apply = person.fullName.apply(person1,["chennai","Tamil Nadu"]);
console.log(apply);
let call = person.fullName.call(person1,"Banglore","karnataka");
console.log(call);



const person = {
    fname : "rakesh",
    lname: "cooper",
    fullname:function(){
        return this.fname+" "+this.lname;
    }
}

const member = {
    fname : "Tom",
    lname: "cruise",
}

let bind = person.fullname.bind(member);
console.log(bind);


class Peron{
    firstName = "John";
    lastName = "Doe";
    fullName(){
        return this.firstName + " " + this.lastName;
        }
}
  
const member = {
    firstName:"Hege",
    lastName: "Nilsen"
  }

let person = new Peron();  
let fullName = person.fullName.bind(member);
console.log(fullName);


let array = [5,10,15];
array.forEach(
(value) => {
    console.log(value);
}
);
    


console.log();


let num = [65,45,85,78,25,54,98,87,55];
let sum = num.sort((x,y) => { return x-y });
sum.forEach((value) => { console.log(value)});


let fruits = ["mango","Apple","strawberry","bananna","citrus"];
fruits.sort();
fruits.forEach((value) => { console.log(value)});



let fruits = ["mango","Apple","strawberry","bananna","citrus"];
fruits.splice(3,0,"orange","blueberry");
console.log(fruits);

let fruit = "Bananna";
let sp = fruit.split("-");
console.log();



// callback()
add(1,2,displayConsole);
function add(x,y,callBack){
    let result = x + y;
    callBack(result);
}

function displayConsole(value){
    console.log(value);
}



// array map

let numbers = [1,2,3,4,5];
let num = numbers.map(squares);
num.forEach(value => {console.log(value)});

function squares(value){
    return Math.pow(value,2);
}



// array filter;

let age = [19,16,47,18,22,25,51,17,32];
let fil = age.filter(check);
fil.forEach((value) => {console.log(value)});


function check(value){
    if(value >= 18){
        return value;
    }
    
}



//array reduce

let num = [19,16,47,18,22,25,51,17,32];
let sum = num.reduce(add);
console.log("total num :"+sum);

function add(total, value){
    return total + value;
}



// array some

let age = [19,47,18,22,25,51,32];
let fil = age.some(check);
console.log("greater than 18 is "+fil);

function check(value){
    if(value > 18){
        return value;
    }
    
}




//dom

//console.dir(document);
//console.log(document.title);
//document.body.style.backgroundColor = "lightblue";
//document.getElementById('myDiv').innerHTML = "cooper";


// element selectors;
let element  = document.getElementById('myTitle');
element.style.backgroundColor = "lightblue";

let fruits = document.getElementsByName('fruits');
console.log(fruits[1]);

fruits.forEach(fruit => {if(fruit.checked){
    console.log(fruit.value)
}});

let veggie = document.getElementsByTagName('li');
veggie[1].style.backgroundColor = "lightblue";

let sweets = document.getElementsByClassName("dessert");
sweets[2].style.backgroundColor = "lightblue";



let element = document.querySelector('.dessert');
element.style.backgroundColor = "lightblue";



let element = document.querySelectorAll('[for]');
element.forEach(value =>{value.style.backgroundColor = "lightblue"});



let element = document.body;
let child = element.firstElementChild;
child.style.backgroundColor = "lightblue";


let element = document.querySelector("#veg");
let sibling = element.nextElementSibling;
sibling.style.backgroundColor = "lightblue";



let element = document.querySelector("#veg");
let child = element.children[0];
child.style.backgroundColor = "lightblue";




let element = document.querySelector("#veg");
let children = Array.from(element.children);
children.forEach(element => element.style.backgroundColor = "lightblue");



let element = document.createElement('h1');
element.textContent = "cooper";
document.body.append(element);


let value = document.querySelector("#fruit");
let tag = document.createElement("li");
tag.textContent = "cooper";
//value.append(tag);
//value.prepend(tag);

value.insertBefore(tag,value.getElementsByTagName('li')[3]);



let element = document.getElementById("MyButton");
element.onclick = doSomething;
document.body.onload = doSomething;


let element = document.getElementById("myText");
element.onchange = doSomething;
function doSomething(){
    alert("Nothing");
}



let element = document.getElementById("innerDiv");
element.addEventListener("mouseover",changeBlue);
element.addEventListener("mouseout",changeGreen);

function changeBlue(){
    element.style.backgroundColor = "lightblue";
}

function changeGreen(){
    element.style.backgroundColor = "lightgreen";
}



let innerdiv = document.getElementById("innerDiv");
let outerdiv = document.getElementById("outerDiv");
innerDiv.addEventListener("click",changeBlue);
outerDiv.addEventListener("click",changeBlue,true);

function changeBlue(){
    alert("you selected first "+this.id)
    this.style.backgroundColor = "lightblue";
}



const btn = document.querySelector("#myButton");
const img = document.querySelector("#myImg");

btn.addEventListener("click", () => {
    if(img.style.visibility == "hidden"){
        img.style.visibility = "visible";
    }
    else{
        img.style.visibility = "hidden";
    }
});



const myDiv = document.querySelector("#myDiv");
window.addEventListener("keydown",keyPress);
let x = 0;
let y = 0;


function keyPress(event){
  /*  if(event.key == "ArrowDown"){
        y += 5;
        myDiv.style.top = y + "px"; 
    }

    else if(event.key == "ArrowUp"){
        y -= 5;
        myDiv.style.top = y + "px"; 
    }

    else if(event.key == "ArrowRight"){
        x += 5;
        myDiv.style.left = x + "px"; 
    }
    else if(event.key == "ArrowLeft"){
        x -= 5;
        myDiv.style.left = x + "px"; 
    }
   
    switch(event.key){
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y + "px";
            break;

        case "ArrowUp":
            y-=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x+=5;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x-=5;
            myDiv.style.left = x + "px";
            break;

        default:
            break;            
    }


}




let timer1 = setTimeout(suma,1000);
let timer2 = setTimeout(numa,2000);
let timer3 = setTimeout(dai,3000);

function suma(){
    alert("sumathaan da");
}

function numa(){
    alert("numathaan da");
}

function dai(){
    alert("otha dai");
}


document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("thanks");
}



let timer1 = setInterval(suma,1000);
let timer2 = setInterval(numa,2000);
let timer3 = setInterval(dai,3000);

function suma(){
    alert("sumathaan da");
    clearInterval(timer1);
}

function numa(){
    alert("numathaan da");
    clearInterval(timer2);
}

function dai(){
    alert("otha dai");
    clearInterval(timer3);
}




document.getElementById("myButton").onclick = function(){
    
    alert("thanks");
}


let count = 0;
let max = 10;

let timer = setInterval(countUp,1000);

function countUp(){
    count += 1;
    console.log(count);
    if(count >= max){
        clearInterval(timer);
    }
    
}




//interview



//let element = document.querySelectorAll("#fruit li");
//element.forEach((vlaue) => vlaue.style.backgroundColor= "blue");

let element = document.querySelectorAll("#fruit li");
element.forEach((value) => {
    
    value.addEventListener('click',colorChange) 
} )


function colorChange(){
    removeActive();
    this.style.backgroundColor= "blue";
    
}

function removeActive(){
    element.forEach((value) => {
    value.style.backgroundColor = ""; 
    } ) 
}


let time = document.querySelectorAll(".time li");
time.forEach((value) => {value.addEventListener("click",changeColor)});

function changeColor(){
    backColor();
    this.style.backgroundColor = "lightblue";
}

function backColor(){
    time.forEach(element => {
        element.style.backgroundColor = "";
    });
}



let time = document.querySelectorAll(".banner");
time.forEach((value) => {value.addEventListener("mouseover",changeColor)});
time.forEach((value) => {value.addEventListener("mouseout",backColor)});

function changeColor(){
    backColor();
    this.style.backgroundColor = "lightblue";
    this.style.color ="black";
}

function backColor(){
    time.forEach(element => {
        element.style.backgroundColor = "";
    });
    time.forEach(element => {
        element.style.color = "";
    });
}



const d = new Date();
document.getElementById('display').innerHTML = d;


const person = {
    firstname: "rakesh",
    lastname:"cooper",
    age:25,

    drive : function(){
        console.log(person.lastname +" "+"is driving");        
    }
}
person.drive();
console.log();

let time = document.querySelectorAll(".veg li");
time[0].style.backgroundColor = "lightblue";



let time = document.querySelectorAll(".veg li");
time.forEach((element) => element.style.backgroundColor = "lightblue");



let time = document.querySelector(".veg");
let ele = time.lastElementChild;
console.log(ele);
ele.style.backgroundColor = "lightblue";



let time = document.querySelectorAll(".veg li");
let ele = time.forEach((value) => value.style.backgroundColor = "lightblue");
console.log(ele);
// ele.style.backgroundColor = "lightblue";



let element = document.getElementById("something");
//element.onclick = doSomething;
//element.onload = doSomething;
//element.onblur = doSomething;

function doSomething(){
    alert("You Clicked Me");
} 

let time = document.querySelector(".veg");
time.onmousedown = doSomething;
time.onmouseup = doSomethingElse;
//time.onclick = doSomethingElse;
console.log(time);
function doSomething(){
    time.style.backgroundColor = "lightblue";
}

function doSomethingElse(){
    time.style.backgroundColor = "";
}


let element = document.querySelectorAll(".veg li");
element.forEach((value) => value.addEventListener("click",chColor));

function chColor(){
    removeActive();
    this.style.backgroundColor = "lightblue";
}

function removeActive(){
    element.forEach((value) => value.style.backgroundColor = "");
}




let text = "";
let array = ["Cooper","Tyrone","Magnus","Stalin","Vijay","Ajith"];
for(let i=0; i < array.length; i++){
    text += array[i] + "<br>";
    console.log(text);
    document.getElementById("demo").innerHTML = text;
}


let text = "";
let array = ["Cooper","Tyrone","Magnus","Stalin","Vijay","Ajith"];

for(let i in array){
    text += array[i] + "<br>";
    document.getElementById("demo").innerHTML = text;
}


let text = "";
let array = ["Cooper","Tyrone","Magnus","Stalin","Vijay","Ajith"];
for(let i of array){
    text+=i + "<br>";
    document.getElementById("demo").innerHTML = text;
}




function one(){
    alert("hello");
}

function two(){
    alert("Welcome");
}

function three(){
    alert("To our developing site");
}

document.getElementById("something").onclick = function(){
    setTimeout(one,1000);
    setTimeout(two,2000);   
    setTimeout(three,3000);
}

let count = 0;
const timer = setInterval(countUp,1000);
let max = 10;
function countUp(){
    count += 1;
    console.log(count);
    if(count >= max){
        clearInterval(timer);
        console.log("happy new year")
    }
    
}



(function sum(){
    let n1 = 5050;
    let n2 = 8050;

    let result = n1 + n2;
    
    (function display(){
        console.log(result);
    })();


})();



const element = document.querySelectorAll('.time li')
element.forEach((value) => {value.addEventListener('mouseover',colorCH)})

function colorCH(){
    removeactive()
    this.style.backgroundColor = "lightgreen";
}

function removeactive(){
    element.forEach((value) => value.style.backgroundColor = "");
}




const store = new Map([
    ["pant",50],
    ["jeans",70],
    ["underwear",80]
]);

store.set("shirt",40);
store.set("lungi",75);
store.set("t-shirt",55);

store.forEach((value,key) => console.log(key,value))
let shopping = 0;

shopping += store.get("pant");
console.log(shopping);
console.log(store.has(55));



// array map

let num = [1,2,3,4,5,6,7];
let squares = num.map(square);
squares.forEach((element) => console.log(element))

function square(element){
    return Math.pow(element,2);
}



// string methods

let n = "   cooper   "
let word = "slice me from end to here me"
let carray = "a,b,c,d,e,f"
console.log(n.length)
console.log(word.slice(0,-11))
let txt = n.trim();
console.log(txt.length)
console.log(word.substring(0,5))
console.log(word.substr(0,5))
let txt2 = word.replace('slice','substring')
let txt3 = txt2.replaceAll('e','i') 
console.log(txt2.toUpperCase());
console.log(txt3);
let txt4 = word.concat("",n);
console.log(txt4)
let txt5 = carray.split(",");
console.log(txt5[3])
let num = "6"
let pads = num.padStart(5,"x")
console.log(pads)
let pade = num.padEnd(5,"x")
console.log(pade)
console.log(n.charAt(3))
console.log(word.indexOf('me'))
console.log(word.lastIndexOf('me'))
console.log(word.search('me'))
console.log(word.match('me'))
const iterator = word.matchAll("me") 
console.log(Array.from(iterator))
console.log(word.includes('slice',0))
console.log(word.startsWith('slice'))
console.log(word.endsWith('me'))



//array methods
// foreach

let students = ["bruce-wayne","ethan-hunt","clark-kent"];
students.forEach(captalize)
students.forEach(print)

function captalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element){
    console.log(element);
}



//array methods

let fruits = ["apple","mango","bananna","papaya"];
console.log(fruits[fruits.length -1])
console.log(fruits[fruits.length] = "lemon")
console.log(fruits)

let text = "";
//for(let i=0; i<fruits.length; i++){
//    text += fruits[i] 
//    console.log(text) }

//for(let i in fruits){
//    text += fruits[i]
//    console.log(text)}

//for(let i of fruits){
//    text += i
//    console.log(text)}

//let print = 0;
//while(print < fruits.length){
//    text += fruits[print]
//    console.log(text  +"<br>")
//    print ++;}

let fruits2 = ["mombasa","stawberry","avacado"]
fruits.push("orange")
fruits.pop();
fruits.unshift("kiwi")
fruits.shift()
//delete fruits[1];
console.log(fruits)
console.log(fruits.length)
console.log(fruits2)

let fruits3 = fruits.concat(fruits2)
console.log(fruits3)
fruits3.splice(3,1,"blueberry")
fruits3.splice(2,1)
console.log(fruits3)
let slice = fruits3.slice(0,2)
console.log(fruits3)
console.log(slice)



let list = document.querySelector(".time");
let listItem = document.createElement('li');
listItem.textContent = "Tomato";
list.append(listItem);
*/

let time = document.querySelectorAll(".time li");
time.forEach(element => {
    element.addEventListener("mouseover",DoSomeThing)
});

function DoSomeThing(){
    removeActive()
    this.style.backgroundColor = "lightgreen"
}

function removeActive(){
    time.forEach(element => {
        element.style.backgroundColor = ""
    });
}