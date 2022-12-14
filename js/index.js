//
//mi proyecto esta orientado a darle vida al carrito de la pagina que cree en el curso de desarrolo web//
//para esto voy a comenzar con lo basico visto en clase que es logearse, agregar productos y posteriormente realizar una suma de los procustos//
//


//constantes para selecconar ID del HTML
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')
const finalizarCompra = document.getElementById('finalizar-compra')
const activarFuncion = document.getElementById('activarFuncion')
const containerCarrito = document.getElementById('container-Carrito');
const divArticle = document.getElementById ('divArticle');
const sitioConstruccion = document.querySelectorAll('#consturccion')


let carrito = []

//iniciando DOM en el proyecto
document.addEventListener('DOMContentLoaded', () => {
    traerProductos() 
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    actualizarCarrito();
    if(activarFuncion){
        document.querySelector('#activarFuncion').click(procesarCompra);
    }
})

//utilizando fetch para traer productos del json local
async function traerProductos(){
    const url = './json/catalogo.json' 
    
    try{
        const resultado = await fetch(url);
        const respuesta = await resultado.json();
        pintarProductos(respuesta);

    }catch (error){
        console.log(error);
    }
}


// agregando productos en cards con innerHTML
function pintarProductos(catalogo){
        if(divArticle){
        catalogo.forEach(producto => {
        let article = document.createElement('article');
        article.classList.add('section1-catalogo__article', 'd-flex', 'flex-column', 'm-2');
        const {id, nombre, tipo, calibre, capacidad, precio, img} = producto
        article.innerHTML = 
                        `<div class="section1-catalogo__article-1--div1 div-article__active">
                                <img src="./img/${img}" alt="${nombre}" class="section1-catalogo__article1 article1__div1-img border border-dark rounded-3">
                            </div>
                            <div class="section1-catalogo__article-1--div2 d-flex flex-column justify-content-center border border-dark rounded-3 pb-2">
                                <p class="section1-catalogo__article-1--div2--text justify-content-center m-1">
                                    <h4 class="section1-catalogo__article-1--div2--text--h4 text-center mx-0 my-2">${nombre}</h4>
                                    <p class="text-center m-1 text-dark"><b>PRODUCTO N?? ${id}</b></p>
                                    <p class="text-center m-1 text-dark">${tipo}</p>
                                    <p class="text-center m-1 text-dark">Calibre ${calibre}</p>
                                    <p class="text-center m-1 text-dark">Cargador ${capacidad}</p>
                                    <p class="text-center m-1 text-dark"><b> $ ${precio}</b></p>
                                </p>
                                <button type="button" id="agregar${id}" class="btn btn-secondary m-3">AGREGAR</button>
                            </div>`
            divArticle.appendChild(article); 
        
    //agregando evento al tag "button" de agregar al carrito

            const boton = document.getElementById(`agregar${id}`)
            boton.addEventListener('click', () => {
                Toastify({
                    text: "Producto agregado al carrito",
                    duration: 3000,
                    newWindow: true,
                    gravity: "bottom", 
                    position: "right", 
                    stopOnFocus: true, 
                    style: {
                      background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(91,91,91,1) 31%, rgba(154,154,154,1) 79%)",
                    },
                  }).showToast();
                agregarCarrito(id)
            })
        }) 
    }
}


//let para agregar productos con el tag "button" al carrito
const agregarCarrito = (prodId) => {
    
    const existe = carrito.some((producto) => producto.id === prodId);
    fetch(`./json/catalogo.json`)
    .then(response => response.json())
    .then ((catalogo) => {
    
        if(existe){
            const prod = carrito.map(producto => {
                if(producto.id === prodId){
                    producto.cantidad++;
                }
            })
        }else{
            const item = catalogo.find((data) => data.id === prodId);
            carrito.push(item); 
        }
    })
    actualizarCarrito();
}


//boton de vaciar productos del carrito 
if(botonVaciar){
    botonVaciar.addEventListener ('click', () => {
        if(carrito.length === 0){
            swal("No hay productos para eliminar", {
                icon: "warning",
              });
        }else{
            swal({
                title: "Desea eliminar los productos",
                text: "Una vez eliminados deberas agregarlos nuevamente",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete ) => {
                
                if (willDelete) {
                  swal("Productos eliminados correctamente", {
                    icon: "success",
                  });
                  carrito.length = [];
                  actualizarCarrito ();
                } else {
                  swal("Continua con tu compra");
                }
              }); 
        }

    })
}


//boton para finalizar compra e ir para la pagina de finalizar compra
if(finalizarCompra){
    finalizarCompra.addEventListener('click', () =>{
        if (carrito.length === 0) {
            swal("Espera!", "Tu carrito esta Vacio", "warning");;
          } else {
            location.href = "carrito.html";
            procesarCompra();
          }
    })
}


//Actuaizando el carrito nuevamente seteando el div colocando uno nuevo
const actualizarCarrito = () => {
    fetch(`./json/catalogo.json`)
    .then(response => response.json())
    .then ((data) => {
        data = carrito
        if(containerCarrito){
            containerCarrito.innerHTML = " ";
            carrito.forEach((producto) => {
                const div = document.createElement('div');
                div.className = (`productoEnCarrito text-white mt-5 rounded-2 d-flex`);
                const {id, nombre, precio, cantidad, img} = producto;
                div.innerHTML += `
                                <div> 
                                    <img src="./img/${img}" alt="${nombre}" class="section1-catalogo__article1 article1__div1-img img-fluid border border-dark rounded-3 w-75">
                                </div>
                                <div> 
                                    <p class="border border-light border-2 p-2 rounded-2 mt-2"> ${nombre}</p>
                                    <p class="border border-light border-2 p-2 rounded-2"> Precio: $ ${precio}</p>
                                    <p class="border border-light border-2 p-2 rounded-2"> Cantidad: <span id="cantidad"> ${cantidad}</p>
                                    <button onclick = "eliminarProducto(${id})" class="btn btn-danger boton-eliminar p-2 rounded-2 border border-white">Eliminar producto</button>
                                </div>
                                `
                containerCarrito.appendChild(div);
            })
        }
        if(carrito.length === 0){
            containerCarrito.innerHTML= `<p class="fs-4 fw-bolder text-center ">No hay productos agregados</p>`
        }
        contadorCarrito.textContent = carrito.length;
        if(precioTotal){
            precioTotal.textContent = carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0);
        }
        guardarEnStorage ()

    })

}


//funcion para eliminar productos
function eliminarProducto(prodId) {
    const id = prodId
    carrito = carrito.filter((producto) => producto.id !== prodId);
    swal("Eliminaste el producto satisfactoriamente", " ", "success");
    actualizarCarrito();
}


//funcion para guardar en el LocalStorage
function guardarEnStorage (){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


//fumcion para procesar la compra e ir al html de compra final
function procesarCompra() {
    fetch(`./json/catalogo.json`)
    .then(response => response.json())
    .then ((data) => {
            data = carrito
            carrito.forEach(datos => {
            const listaCompra = document.querySelector("#tbody");
            const {nombre, precio, img, cantidad } = datos;
                const row = document.createElement("tr");
                row.innerHTML += `
                            <td>
                            <img class="img-fluid w-25 border border-dark rounded-2" src="./img/${img}"/>
                            </td>
                            <td class="fw-semibold">${nombre}</td>
                            <td class="fw-semibold">$ ${precio}</td>
                            <td class="fw-semibold">${cantidad}</td>
                            <td class="fw-semibold">$ ${precio * cantidad}</td>
                            `;
                listaCompra.appendChild(row);
            });
            totalProceso.innerText = carrito.reduce(
            (acc, prod) => acc + prod.cantidad * prod.precio,
            0
            );
    })
}
