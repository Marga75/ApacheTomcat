const dragonButton = document.getElementById("dragons");
const dragonContainer = document.getElementById("dragonContainer");

dragonButton.addEventListener("click", function (){
    if(dragonContainer.style.display === "none" || dragonContainer.style.display === ""){
        dragonContainer.style.display = "block";
    } else{
        dragonContainer.style.display = "none";
    }
});

const humanButton = document.getElementById("humans");
const humanContainer = document.getElementById("humanContainer");

function showHumans(){
    if(humanContainer.style.display === "none" || humanContainer.style.display === ""){
        humanContainer.style.display = "block";
    } else {
        humanContainer.style.display = "none";
    }
}

humanButton.addEventListener("click", showHumans());