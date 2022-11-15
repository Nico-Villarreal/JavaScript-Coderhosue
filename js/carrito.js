const formCompra = document.getElementById('procesar-pago')

activarFuncion.addEventListener('click', procesarCompra)

formCompra.addEventListener('submit', enviarPedido)

function enviarPedido(e){
    e.preventDefault()

    const cliente = document.getElementById('cliente').value
    const correo = document.getElementById('correo').value

    if(correo === "" || cliente === ""){
        swal("Debes completar los Campos vacios", "Rellena el formulario", "error");
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

        localStorage.clear();
    }

}


