//mi proyecto esta orientado a darle vida al carrito de la pagina que cree en el curso de desarrolo web//
//para esto voy a comenzar con lo basico visto en clase que es logearse, agregar productos y posteriormente realizar una suma de los procustos//


//funcion constructora y agregando base de datos local de los productos para iteraccionar con ellos
class producto {
    constructor (producto, nombre, tipo, calibre, capacidad, precio, img){
        this.producto = producto;
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo;
        this.calibre = calibre;
        this.capacidad = capacidad;
        this.precio = parseFloat(precio);
        this.img = img;
    }
}

const catalogo = [];
catalogo.push(new producto(1, "HK-USP", "Semiautomatica", "9mm", "16 mun.", 3500, "HK-USP.webp"));
catalogo.push(new producto(2, "DESERT EAGLE", "Semiautomatica", ".45 mm", "7 mun", 5500, "DESERT-EAGLE.webp"));
catalogo.push(new producto(3, "MAGNUM .44", "Semiautomatica", ".44 mm", "6 mun. (Tambor)", 5900, "MAGNUM-44.webp"));
catalogo.push(new producto(4, "GLOCK 17", "Semiautomatica", "9mm", "17 mun.", 4800, "GLOCK-17.webp"));

console.log(catalogo); 

// agregando productos en cards con innerHTML
const divArticle = document.getElementById ('divArticle');

catalogo.forEach(producto => {
    let article = document.createElement('article');
    article.classList.add('section1-catalogo__article', 'd-flex', 'flex-column', 'm-2');

    article.innerHTML = 
                       `<div class="section1-catalogo__article-1--div1 div-article__active">
                            <img src="./img/${producto.img}" alt="HK-USP" class="section1-catalogo__article1 article1__div1-img border border-dark rounded-3">
                        </div>
                        <div class="section1-catalogo__article-1--div2 d-flex flex-column justify-content-center border border-dark rounded-3 pb-2">
                            <p class="section1-catalogo__article-1--div2--text">
                                <h4 class="section1-catalogo__article-1--div2--text--h4 text-center mx-0 my-2">${producto.nombre}</h4>
                                <ul>
                                    <li><b>PRODUCTO N° ${producto.producto}</b></li>
                                    <li>${producto.tipo}</li>
                                    <li>Calibre ${producto.calibre}</li>
                                    <li>Cargador ${producto.capacidad}</li>
                                    <li><b>$ ${producto.precio}</b></li>
                                    <button type="button" data-id="${producto.producto}" class="btn btn-secondary">AGREGAR</button>
                                </ul>
                            </p>
                        </div>`

    divArticle.appendChild(article);                    
})

//funciones en caso de que el usuario se logee correctamente//

//datos para el login del usuario//
const login = ["nicolas", "123456"]
const user = login[0];
const pass = login[1];


//funcion para validar datos
function validarDatos(usuario, password){

    if (usuario === user && password === pass){
        return true;

    }else {
        alert ("Ha ocurrido un error al ingresar");
    }
}

//empezando a solicitar datos//
function pedirDatos(){
    let usuario = prompt("Ingrese el Usuario");
    let password = prompt("Ingrese la Contraseña");

    if (validarDatos(usuario, password)){
        alert("Bienvenido a Imitation of Weapons!!");
    }else{
        alert("Los datos ingresados no son correctos, vuelve a intentarlo");
    }
}

divArticle.addEventListener('click', e=> {
    addCarrito(e)
})


const addCarrito = e => {
    //console.log(e.target)
    //console.log(e.target.classList.contains('btn'))
    if(e.target.classList.contains('btn')){
        setCarrito (e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto =>{
    console.log(objeto);
    const prod = {
        porducto: objeto.querySelector('button').dataset.id,
    }
    alert("agregaste un producto")
    console.log(prod)
    
}

localStorage.setItem('productos', addCarrito)






/*document.addEventListener('DOMContentLoaded', () => {

    carrito = JSON.parse(localStorage.getItem('carrito')) || []; 

})/*








//empezando a solicitar datos//
/*--function pedirDatos(){
    let usuario = prompt("Ingrese el Usuario");
    let password = prompt("Ingrese la Contraseña");

    if (validarDatos(usuario, password)){
        let resp = confirm("Iniciar compra de productos?");
        if (resp){
            while(resp){
                agregarProductos();
                resp = confirm("Agregar otro producto?");
            }
            let confirmQuitar = confirm("Quiere eliminar un producto?");
            if(confirmQuitar){
                while(confirmQuitar){
                    quitarProducto();
                    confirmQuitar = confirm("Quiere eliminar otro producto?");
                    }
                }
            if (carritoCompra != ""){
                let respuesta = confirm ("Desea finalizar la compra de los productos N°:" +" "+ carritoCompra);
                if (respuesta){
                    sumarProductos()
                    alert("Muchas Gracias por confiar en Imitation of Weapon!!");
                    alert("Lo esperamos nuevamente!!");
                }
            }

        }else{
            alert("Hasta la Proxima!!");
            alert("Recarga la pagina para iniciar una nueva compra");
        }

    }else{
        alert("Los datos ingresados no son correctos, vuelve a intentarlo");
    }
}


//funcion para agregar productos//
let carritoCompra = [];

function agregarProductos(){
    let numeroProducto =  prompt("Ingrese N° de producto");
    let ingresarProducto = confirmarProducto(numeroProducto)
    carritoCompra.push(numeroProducto);
  
    if(ingresarProducto){
        console.log("Producto N°" + " " +numeroProducto+ " " + "ingresado corectamente:" + ingresarProducto);
        console.log(carritoCompra)
    }else{
        if(numeroProducto === null){
            carritoCompra = false;
        }else{
            alert("N° de producto no valido")
        }
    }
}

// funcion para elegir los productos//
function confirmarProducto(numeroProducto){
    let producto;
    switch (numeroProducto){
        case "1":
            producto = catalogo[0].nombre;
            break;
        case "2":
            producto = catalogo[1].nombre;
            break;
        case "3":
            producto = catalogo[2].nombre;
            break;
        case "4":
            producto = catalogo[3].nombre;
            break;

        default:
            producto = false;
        }  
    
    return producto
}

//funcion para eliminar producto
function quitarProducto(){
    let productoQuitado = prompt("Desea eliminar un producto?");
    let estaProducto = carritoCompra.includes(productoQuitado);

    if(estaProducto){
        let indexProducto = carritoCompra.indexOf(productoQuitado);
        carritoCompra.splice(indexProducto, 1);
    }else{
        alert("Producto inexistente en carrito");
    }   
}

//funcion para sumar la totalidad de productos seleccionados y agregar envio o no//

let producto1 = catalogo[0].precio; 
let producto2 = catalogo[1].precio;
let producto3 = catalogo[2].precio;
let producto4 = catalogo[3].precio;
let descuento = 3999;
let costoEnvio = 500;

 
function sumarProductos(){ 
    let suma = producto1 + producto2 + producto3 + producto4 - descuento;
    let canastaTotal = parseInt(suma) + parseInt(costoEnvio);
    alert("La suma de todos los productos es:" +" "+"$"+suma);
    alert("Por seleccionar 4 productos o mas, se le aplico un descuento de:" +" "+"$"+descuento);

    let acept = confirm("Desea agregar envio?");
    if(acept){
        alert("Envio agregado correctamente"+" "+"$"+costoEnvio);
        alert("Total carrito:" + " " + "$" + canastaTotal);
    }else{
        alert("Total carrito:" + " " + "$" + suma);
    }
}

//llamando a la funcion en el navegador//
pedirDatos();--*/
