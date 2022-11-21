const formCompra = document.getElementById('procesar-pago')

activarFuncion.addEventListener('click', procesarCompra)

formCompra.addEventListener('submit', enviarPedido)

function enviarPedido(e){
    e.preventDefault()

    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const correo = document.getElementById('correo').value
    const telefono = document.getElementById('telefono').value

    if(nombre === "" || apellido === "" || correo === "" || telefono === ""){
        swal("Rellena el Formulario", "Debes completar los campos vacios", "error");
    }else{
        const spinenr = document.getElementById('spinner')
        spinenr.classList.add("d-flex")
        spinenr.classList.remove("d-none")

        setTimeout (() => {
            const spinenr = document.getElementById('spinner');
            spinenr.classList.remove("d-flex");
            spinenr.classList.add("d-none");
            formCompra.reset();
        }, 3500)
        setTimeout(()=>{
            swal({
                title: "Compra realizada con exito!",
                text: "Garcias por elegirnos, seras redirigdo a catalogo",
                icon: "success",
              });}, 4000)
        setTimeout(()=>{
            location.href = "index.html";
        }, 7000)
        localStorage.clear();
    }

}
