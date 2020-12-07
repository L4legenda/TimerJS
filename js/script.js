
let timer = document.querySelector("#timer");
let btn = document.querySelector("#btn");


setInterval(() => {
    var now = new Date();

    timer.innerHTML = now.getMinutes() + ":" + now.getSeconds();

    if(now.getSeconds() == 1){
        timer.style.color = "blue";
    }
    if(now.getSeconds() == 2){
        timer.style.color = "#baac0d";
    }
    if(now.getSeconds() > 2){
        timer.style.color = "black";
    }

}, 1000);

let display = 1;

function click(){
    if(display == 1){
        timer.style.display = 'none';
        display = 0;
    }
    else if(display == 0){
        timer.style.display = 'block';
        display = 1;
    }
    
}

btn.onclick = click;




