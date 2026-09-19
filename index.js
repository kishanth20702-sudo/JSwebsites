console.log("Hello world");
console.log(`i like pizza`);

//document.getElementById("myh1").textContent = `Hello`;
//document.getElementById("myP1").textContent = `i like pizza`;
//window.alert(`this is an alert`)
//window.alert(`i like pizza`)
//this is a comment

/*let x;
x=100;

console.log(x);
let age = 25;
console.log(`age`);

console.log(`you are ${age} years`)
console.log(typeof age );


let day = true;
colsole.log(`it is ${day}`)*/
let username;



/*username = window.prompt("what is your user name?");

document.getElementById("myh1").textContent=`Hello ${username}`;

console.log(username)*/

let user;

document.getElementById("mysubmit").onclick = function(){
    user =  document.getElementById("user").value
    console.log(user);
    document.getElementById("myh1").textContent=`Hello ${user}`;
}

