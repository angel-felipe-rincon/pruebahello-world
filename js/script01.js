function saludar(){
    var nombre = document.getElementById("nombre").value;
    alert("hola " + nombre);
    console.log(nombre); //por que document no me sale azul como a el, y console tampoco
}

function validarEdad(){
    var edad = document.getElementById("edad").value;

    if(edad < 0 || edad > 110 || edad != null){
        alert("valores no validos");
    } else{
        if(edad < 18){
            alert("usted es menor de edad");
        }else{
            alert("usted es mayor de edad")
        }
    }
        
 //el null lo mejor ya seria ponerlo en otr condicion
}
function mostrar(index){
    if(index == 1){
        document.getElementById('foto').src = "img/1.png";
    } else{
        document.getElementById('foto').src = "img/2.png";
    }
}

function bordear(index){
    if (index == 1) {
        document.getElementById('foto').className = "estilo01";
    }else{
        document.getElementById('foto').className = "estilo02";
    }
}

let texto = "curso de programacion web";
let resultado = texto.match(/[a-f]/g);

//alert(resultado);

var numero = "123456789"; //variable dodne tiene todos los numeros
var regex = "[0-9]+$" //expresion que dice que solo tome en cuenta numeros, del cero al 9

if(numero.match(regex) == null){ //luego se le dice que si concuerda con la expresion regular y es nulo, esta bien
    alert("numeros validos")
}