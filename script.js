const dragonButton = document.getElementById("dragons");
const dragonContainer = document.getElementById("dragonContainer");

dragonButton.addEventListener("click", function (){
    if(dragonContainer.style.display === "none" || dragonContainer.style.display === ""){
        dragonContainer.style.display = "block";
    } else{
        dragonContainer.style.display = "none";
    }
});