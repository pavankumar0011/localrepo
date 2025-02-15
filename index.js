let count = 0;

document.getElementById("butd").onclick = function(){
    count--;
    document.getElementById("h1").textContent = count;
}

document.getElementById("butr").onclick = function(){
    count = 0;
    document.getElementById("h1").textContent = count;
}

document.getElementById("buti").onclick = function(){
    count++;
    document.getElementById("h1").textContent = count;
}