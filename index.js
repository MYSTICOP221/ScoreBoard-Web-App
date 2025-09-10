let homeScore = 0
let homeScoreEl = document.getElementById("h-score")


function plusoneh(){
    
    homeScore += 1
    
    homeScoreEl.textContent = homeScore
    
}

function plustwoh(){
    
    homeScore += 2
    
    homeScoreEl.textContent = homeScore
    
}

function plusthreeh(){
    
    homeScore += 3
    
    homeScoreEl.textContent = homeScore
    
}


let guestScore = 0
let guestScoreEl = document.getElementById("g-score")

function plusoneg(){
    
    guestScore += 1
    guestScoreEl.textContent= guestScore
}

function plustwog(){
    
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function plusthreeg(){
    
    guestScore += 3
    guestScoreEl.textContent = guestScore    
}



let homefoul = 0

homefoulEl = document.getElementById("h-foul")


function foulinch(){
    
    homefoul += 1
    
    homefoulEl.textContent = homefoul
    
}

let guestfoul = 0

guestfoulEl = document.getElementById("g-foul")

function foulincg(){
    
    guestfoul += 1
    
    guestfoulEl.textContent = guestfoul
    
}

function resetAll(){
    homeScore = 0
    guestScore = 0
    
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    
    homefoul = 0
    guestfoul = 0
    
    homefoulEl.textContent = homefoul
    guestfoulEl.textContent = guestfoul
    
    
}