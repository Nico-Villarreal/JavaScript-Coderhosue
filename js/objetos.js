
//funcion constructora y agregando base de datos local de los productos para iteraccionar con ellos
class producto {
    constructor (producto, nombre, tipo, calibre, capacidad, precio){
        this.producto = producto;
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo;
        this.calibre = calibre;
        this.capacidad = capacidad;
        this.precio = parseFloat(precio);
    }
}

const catalogo = [];
catalogo.push(new producto(1, "HK-USP", "semiautomatica", "9mm", "16 mun.", 3500));
catalogo.push(new producto(2, "DESERT EAGLE", "semiautomatica", ".45 mm", "7 mun", 5500));
catalogo.push(new producto(3, "MAGNUM .44", "semiautomatica", ".44 mm", "6 mun. (Tambor)", 5900));
catalogo.push(new producto(4, "GLOCK 17", "semiautomatica", "9mm", "17 mun.", 4800));

catalogo.forEach(() => {
    console.log(catalogo[0].precio * 1.21)
}
)

console.log(catalogo); 

function agregarProductos(){
    let carritoCompra = [];
    let finCarrito = false;

    while (!finCarrito){
        let numeroProducto =  prompt("Ingrese N° de producto");
        let ingresarProducto = confirmarProducto(numeroProducto)

        if(ingresarProducto){
            console.log("Producto ingresado corectamente:" + ingresarProducto);
            carritoCompra += "\n" + ingresarProducto;
            carritoCompra.push(ingresarProducto)
        
        }else{
            if(codigo === null){
                finCarrito = true;
            }else{
                alert("N° de Producto no valido");
            }
        }
    }
    
    if (carritoCompra != ""){
        let respuesta = confirm ("Desea finalizar la compra de:" + carritoCompra);
        sumarProductos();

        if (respuesta){
            alert("Muchas Gracias por confiar en Imitation of Weapon!!");
            alert("Lo esperamos nuevamente!!");
        }
    }
}

function confirmarProducto(numeroProducto){
    
    let producto;
    switch (numeroProducto){
        case "1":
            producto = "HK-USP";
            break;
        case "2":
            producto = "DESERT EAGLE";
            break;
        case "3":
            producto = "MAGNUM .44";
            break;
        case "4":
            producto = "GLOCK 17";
            break;
        default:
            producto = false;
        } 
    
    return producto
}


















/*let resp = confirm("Iniciar compra de productos?")

function agregarProductos(){
    let carritoCompra = [];
    let finCarrito = false

    let numeroProducto =  prompt("Ingrese N° de producto");
    let ingresarProducto = confirmarProducto(numeroProducto)

    if(ingresarProducto){
        carritoCompra.includes(numeroProducto); 
        console.log(carritoCompra.includes)
    }else{
        alert("Producto no encontrado")
    }

    alert(carritoCompra)
    
}*/




/*function quitarProducto(){
    const productoQuitado = prompt("Desea eliminar un producto?");
    const estaProducto = carritoCompra.includes(productoQuitado);

    if(estaProducto){
        const indexProducto = carritoCompra.indexOf(productoQuitado);
        carritoCompra.splice(indexProducto, 1);
    }else{
        alert("Producto inexistente en carrito");
    }
}

while(ingresarProducto){
    agregarProductos();
    ingresarProducto = confirm("Desea agregar otro producto?");
}


let confirmQuitar = confirm("Quiere quitar un producto?")

while(confirmQuitar){
    quitarProducto();
    confirmQuitar = confirm("Quiere quitar otro producto?")
}

alert("Array quedo asi: " + " " + carritoCompra)*/




















