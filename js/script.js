// --------------------
// Falling hearts animation (only on index page if you add class)
// --------------------

if(document.body.classList.contains("home-page")){

setInterval(()=>{

let heart=document.createElement("div")

heart.innerHTML="❤️"
heart.style.position="fixed"
heart.style.left=Math.random()*100+"%"
heart.style.top="-10px"
heart.style.fontSize="20px"
heart.style.pointerEvents="none"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},4000)

},500)

}


// --------------------
// Password system
// --------------------

function checkPassword(){

let entered=document.getElementById("sitePassword").value

let gate=document.getElementById("passwordGate")

let correct=gate.getAttribute("data-password")

if(entered===correct){

gate.style.display="none"
document.getElementById("protectedContent").style.display="block"

}else{

alert("Wrong password ❤️")

}

}

function flipCard(card){

if(!card.classList.contains("flipped")){
card.classList.add("flipped");
}

}

function lastCard(card){

if(!card.classList.contains("flipped")){

card.classList.add("flipped");

confetti();

}

}

function confetti(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-20px";
heart.style.fontSize="24px";

document.body.appendChild(heart);

let fall=setInterval(()=>{

heart.style.top=parseInt(heart.style.top)+5+"px";

if(parseInt(heart.style.top)>window.innerHeight){

heart.remove();
clearInterval(fall);

}

},20);

}

}

// Falling hearts animation //

setInterval(function(){

let heart=document.createElement("div");

heart.classList.add("floating-heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(15+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

},600);

