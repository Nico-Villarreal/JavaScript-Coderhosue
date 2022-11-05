//mi proyecto esta orientado a darle vida al carrito de la pagina que cree en el curso de desarrolo web//
//para esto voy a comenzar con lo basico visto en clase que es logearse, agregar productos y posteriormente realizar una suma de los procustos//


//funcion constructora y agregando base de datos local de los productos para iteraccionar con ellos
class producto {
    constructor (producto, nombre, tipo, calibre, capacidad, precio, img, cantidad){
        this.id = producto;
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo;
        this.calibre = calibre;
        this.capacidad = capacidad;
        this.precio = parseFloat(precio);
        this.img = img;
        this.cantidad = cantidad
    }
}

const catalogo = [];
catalogo.push(new producto(1, "HK-USP", "Semiautomatica", "9mm", "16 mun.", 3500, "HK-USP.webp", 1));
catalogo.push(new producto(2, "DESERT EAGLE", "Semiautomatica", ".45 mm", "7 mun", 5500, "DESERT-EAGLE.webp", 1));
catalogo.push(new producto(3, "MAGNUM .44", "Semiautomatica", ".44 mm", "6 mun. (Tambor)", 5900, "MAGNUM-44.webp", 1));
catalogo.push(new producto(4, "GLOCK 17", "Semiautomatica", "9mm", "17 mun.", 4800, "GLOCK-17.webp", 1));



//constantes para selecconar ID del HTML

const containerCarrito = document.getElementById('container-Carrito');
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')


let carrito = []

//iniciando DOM en el proyecto

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito') || [])
        actualizarCarrito()
    }
})


// agregando productos en cards con innerHTML

const divArticle = document.getElementById ('divArticle');

catalogo.forEach(producto => {
    let article = document.createElement('article');
    article.classList.add('section1-catalogo__article', 'd-flex', 'flex-column', 'm-2');
    const {id, nombre, tipo, calibre, capacidad, precio, img} = producto

    article.innerHTML = 
                       `<div class="section1-catalogo__article-1--div1 div-article__active">
                            <img src="./img/${img}" alt="HK-USP" class="section1-catalogo__article1 article1__div1-img border border-dark rounded-3">
                        </div>
                        <div class="section1-catalogo__article-1--div2 d-flex flex-column justify-content-center border border-dark rounded-3 pb-2">
                            <p class="section1-catalogo__article-1--div2--text justify-content-center m-1">
                                <h4 class="section1-catalogo__article-1--div2--text--h4 text-center mx-0 my-2">${nombre}</h4>
                                <p class="text-center m-1 text-dark"><b>PRODUCTO N° ${id}</b></p>
                                <p class="text-center m-1 text-dark">${tipo}</p>
                                <p class="text-center m-1 text-dark">Calibre ${calibre}</p>
                                <p class="text-center m-1 text-dark">Cargador ${capacidad}</p>
                                <p class="text-center m-1 text-dark"><b>$ ${precio}</b></p>
                            </p>
                            <button type="button" id="agregar${id}" class="btn btn-secondary m-3">AGREGAR</button>
                        </div>`

    divArticle.appendChild(article); 
    
//agregando evento al tag "button" de agregar al carrito

    const boton = document.getElementById(`agregar${id}`)

    boton.addEventListener('click', () => {
        agregarCarrito(id)
    })
    
})


//let para agregar productos con el tag "button" al carrito
const agregarCarrito = (prodId) => {
    const existe = carrito.some((producto) => producto.id === prodId)
        
        if(existe){
            const prod = carrito.map(producto => {
                if(producto.id === prodId){
                    producto.cantidad++
                }
            })
        }else{
            const item = catalogo.find((producto) => producto.id === prodId)
            carrito.push(item)    
        }
        actualizarCarrito()
}

// eliminando productos
const eliminarProducto =  (prodId) => {
    const item = carrito.find((producto) => producto.id === prodId)
    
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    actualizarCarrito()
}

//boton de vaciar productos del carrito 
 
botonVaciar.addEventListener ('click', () => {
    carrito.length = 0
    actualizarCarrito ()
})


//Actuaizando el carrito nuevamente seteando el div colocando uno nuevo
const actualizarCarrito = () => {
    containerCarrito.innerHTML = " ";

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.className = (`productoEnCarrito bg-secondary text-white m-5 p-3 d-flex gap-5 justify-content-center rounded-2`)
        const {id, nombre, precio, cantidad, img} = producto
        div.innerHTML = `
                        <div> 
                            <img src="./img/${img}" alt="HK-USP" class="section1-catalogo__article1 article1__div1-img border border-dark rounded-3 w-75">
                        </div>
                        <div clas="w-25"> 
                            <p class="border border-light border-3 p-2 rounded-2"> ${nombre}</p>
                            <p class="border border-light border-3 p-2 rounded-2"> Precio: $ ${precio}</p>
                            <p class="border border-light border-3 p-2 rounded-2"> Cantidad: <span id="cantidad"> ${cantidad}</p>
                            <button onclick = "eliminarProducto(${id})" class="boton-eliminar p-2 rounded-2">Eliminar producto</button>
                        </div>
                        `
        containerCarrito.appendChild(div);     
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

     contadorCarrito.innerText = carrito.length
     precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.precio, 0)

}