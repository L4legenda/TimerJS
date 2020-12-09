let elements = document.querySelectorAll(".element");

let i = 0;

setInterval( () => {
    if(i == 0){
        elements[0].style.opacity = 0;
        elements[1].style.opacity = 0;
        elements[2].style.opacity = 0;
    }

    elements[i].style.opacity = 1;
    i = i + 1;
    
    if(i > 2){
        i=0;
    }
    
}, 3000 );


