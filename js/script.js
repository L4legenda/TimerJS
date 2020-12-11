let el = document.querySelector(".header nav");
let btn = document.querySelector(".header button");
let nav = 0;

function showNav(){
    if(nav == 0){
        btn.innerHTML = "-";
        el.style.display = "flex";
        nav = 1;
    }else if( nav == 1){
        btn.innerHTML = "+";
        el.style.display = "";
        nav = 0;
    }
}
