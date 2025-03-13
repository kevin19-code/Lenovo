var manual = document.getElementById("manual");
var sabemoo = 100;

function siguiente(){

    manual.style.marginLeft =  (-sabemoo + "%")
sabemoo += 100;
console.log(sabemoo);

if (margen < -600 || sabemoo === 600 ){

    manual.style.marginLeft = 0;
    sabemoo = 100;
    
    }

}

function atras(){

    sabemoo -= 100;
manual.style.marginLeft = (-sabemoo + "%");
console.log(sabemoo)
if (sabemoo < -50 || sabemoo === -100 ){

    manual.style.marginLeft = (-400 + "%");
    sabemoo = 400;
    
    
    }

}

