let homescoretext= document.getElementById("homescore");
let guestscoretext= document.getElementById("guestscore")
console.log(guestscoretext)

let count=0;
function addone(){
    count=count+1;
    homescoretext.textContent= count;
}
function addtwo(){
    count=count+2;
    homescoretext.textContent= count;
}
function addthree(){
    count=count+3;
    homescoretext.textContent= count;
}


// create functions of class : guestscoreboard
let countguest =0;
function addoneguest(){
    countguest=countguest+1;
    guestscoretext.textContent= countguest;
}
function addtwoguest(){
    countguest=countguest+2;
    guestscoretext.textContent= countguest;
}
function addthreeguest(){
    countguest=countguest+3;
    guestscoretext.textContent= countguest;
}

// create reset function to reset the values

function reset(){
    homescoretext.textContent=0;
    guestscoretext.textContent= 0;
    count=0;
    countguest=0;
}
