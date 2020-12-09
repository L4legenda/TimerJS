let data = [
   {
       name: "Filter C",
       img: "https://s0.rbk.ru/v6_top_pics/ampresize/media/img/4/59/755958619082594.jpg",
        text: "asdasd",
        price: 250,
        type: "c"
    },
    {
        name: "Filter B",
        img: "https://s0.rbk.ru/v6_top_pics/ampresize/media/img/4/59/755958619082594.jpg",
         text: "asdasd",
         price: 350,
         type: "b"
     },
     {
        name: "Filter A",
        img: "https://s0.rbk.ru/v6_top_pics/ampresize/media/img/4/59/755958619082594.jpg",
         text: "asdasd",
         price: 450,
         type: "a"
     }

]


function filterA(){
    reder("a")
}

function filterB(){
    reder("b")
}

function filterC(){
    reder("c")
}

function filterAll(){
    reder("all")
}



function reder(filter){
    let shop = document.querySelector(".shop");
    shop.innerHTML = "";

    for( let i in data ){
        if(filter == data[i].type  || filter == "all"){
            let tovar = document.createElement("div");
        
            let name = document.createElement("p");
            name.innerHTML = data[i].name;
            
            let img = document.createElement("img");
            img.src = data[i].img;
    
            tovar.append(name);
            tovar.append(img);
    
            shop.append(tovar);
        }
        
    }
}


