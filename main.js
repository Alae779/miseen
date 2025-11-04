document.getElementById("challenge-1").style.background = "red";
const btn = document.getElementById("challenge-2")
btn.addEventListener("click", changecolor)
function changecolor(){
    document.getElementById("challenge-2").style.background = "yellow";
}
const alldivs = document.getElementById("challenge-3")
alldivs.addEventListener("click", changeall)
function changeall(){
    document.getElementById("challenge-1").style.background = "blue";
    document.getElementById("challenge-2").style.background = "blue";
    document.getElementById("challenge-3").style.background = "blue";
    document.getElementById("challenge-4").style.background = "blue";
    document.getElementById("challenge-5").style.background = "blue";
    document.getElementById("challenge-6").style.background = "blue";
    document.getElementById("challenge-7").style.background = "blue";
    document.getElementById("challenge-8").style.background = "blue";
    document.getElementById("challenge-9").style.background = "blue";
    document.getElementById("challenge-10").style.background = "blue";

}

// const alldivs = document.getElementById("challenge-3");
// alldivs.addEventListener("click", changeall)
// function changeall(){
// for(let i=0;i<10;i++){
//     document.getElementById(`challenge-${i}`).style.background = "blue";
// }
// }