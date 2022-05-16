let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

let carritoLS = localStorage.getItem("carroLS")
carritoLS = JSON.parse(carritoLS)



actCarro()
carritoLS.forEach(element => {

    let cont = element.cantidad

});

function actCarro() {

    let subt = 0
    carritoLS.forEach(element=> {
        subt = parseInt(element.cantidad)*parseInt(element.precio)
        carrito.innerHTML += 
        `<div><p>${element.cantidad}</p></div>   
        <div><p>${element.nombre}</p></div>
        <div><p>${element.precio}</p></div>
        <div><p>${subt}</p></div>
        <div><a class="nav-link link-success btn-borrar" data-bs-toggle="tooltip" title data-bs-original-title="Eliminar Producto" onclick="borrarProducto(${element.codigoVenta})" href="#"><img class="icon" src="../img/trash3.svg" alt="Borrar"></a></div>`    
    }) 
    let totalCant = carritoLS.map(item => item.cantidad).reduce((ant, act) => ant + act, 0 )
    contador.innerHTML = totalCant
    totalMonto()
}

function totalMonto() {
    let totalMonto = carritoLS.map(item => item.cantidad * item.precio).reduce((ant, act) => ant + act, 0 )
    total.innerText = totalMonto
}    

function borrarProducto(codigoVenta) {
    let borrado = carritoLS.filter( borr => borr.codigoVenta != codigoVenta)

    carritoLS = borrado.slice()
    carroJSON = JSON.stringify(carritoLS)
    localStorage.setItem("carroLS", carroJSON)
    carrito.innerHTML = ""
    actCarro()
    

}
    

function borrarCarro() {
    localStorage.clear()
    carrito.innerHTML = ""
    contador.innerHTML = 0
    total.innerText = 0
}




function finalizarCompra() {
    if (localStorage.length > 0){
        localStorage.clear()
        carrito.innerHTML = ""
        contador.innerHTML = 0
        total.innerText = 0
        Swal.fire({
            html: 'Tu compra resultó exitosa',
            title: 'Que lo disfrutes',
            timer: 2000,
            icon: 'success',
            timerProgressBar: true,
            showConfirmButton: false, 
            background: '#fceecd'     
        }) 
    }else {
        Swal.fire({
            html: 'Tu carro está vacío',               
            timer: 1700,
            icon: 'warning',
            timerProgressBar: true,
            showConfirmButton: true, 
            confirmButtonColor: '#e79d35',
            background: '#fceecd'     
        }) 
    }
}

