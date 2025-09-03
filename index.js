let countElement = document.getElementById("count");
let c=0;

function increaseBtn(){
    c++;
    countElement.textContent = c;
}
function decreaseBtn(){
    if(c>0){
        c--;
        countElement.textContent = c;
    }
}
function resetBtn(){
    c = 0;
    countElement.textContent = c;
}