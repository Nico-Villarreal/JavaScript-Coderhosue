//mi proyecto esta orientado a darle vida al carrito de la pagina que cree en el curso de desarrolo web
//para esto voy a comenzar con lo basico visto en clase que es logearse, agregar productos y posteriormente realizar una suma de los procustos

//datos para el login del usuario 
const user = "nicolas";
const pass = "123456";

//empezando a solicitar datos
function pedirDatos(){

    let usuario = prompt("Ingrese el Usuario");
    let password = prompt("Ingrese la Contraseña");

    if (validarDatos(usuario, password)){
        let resp = confirm("Iniciar compra de productos?")
        if (resp){
            agregarProductos(); 
        }else{
            alert("Hasta la Proxima!!")
        }

    }else{
        alert("Los datos ingresados no son correctos, vuelve a intentarlo");
    }
}

//funciones en caso de que el usuario se logee correctamente


//funcion para validar datos
function validarDatos(usuario, password){

    if (usuario === user && password === pass){
        return true;

    }else {
        alert ("Ha ocurrido un error al ingresar");
    }
}


//funcion para agregar productos
function agregarProductos(){
    let item = "";
    let finCarrito = false;

    while (!finCarrito){
        let codigo = prompt("Comienza a agregar Productos")
        let producto = confirmarProducto(codigo);

        if(producto){
            console.log("producto ingresado corectamente:" + producto)
            item += "\n" + producto;

        }else{
            if(codigo === null){
                finCarrito = true;
            }else{
                alert("codigo no valido")
            }
        }
    }
    if (item != ""){
        let respuesta = confirm ("Finalizar compra de:" + item)
        sumarProductos()
        if (respuesta){
            alert("Muchas Gracias por confiar en Imitation of Weapon!!")
            alert("Hasta la Proxima!!")
        }
    }
}


// funcion para elegir los productos
function confirmarProducto(codigo){
    
    let producto;
    switch (codigo){
        case "1":
            producto = "Hk-Usp";
            break;
        case "2":
            producto = "Desert Eagle";
            break;
        case "3":
            producto = "Magnun 44.";
            break;
        case "4":
            producto = "Glock 17";
            break;

        default:
            producto = false;

    } 

    return producto
}

//funcion para sumar la totalidad de productos seleccionados

let producto1 = 3500
let producto2 = 5500
let producto3 = 5900
let producto4 = 4800
let descuento = 3999

function sumarProductos(){
    let suma = producto1 + producto2 + producto3 + producto4 - descuento;
    alert("La suma de todos los productos es:" +" "+"$"+suma);
    alert("Por seleccionar 4 productos o mas, se le aplico un descuento de:" +" "+"$"+descuento)
} 


//lamando a la funcion en el navegador
pedirDatos();

