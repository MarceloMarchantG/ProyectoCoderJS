// Se declaran las variables

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Se declaran las funciones

function actCarro() {

    let subt = 0
    carritoLS.forEach(element=> {
        const {codigoVenta, precio, cantidad, nombre} = element

        subt = parseInt(cantidad)*parseInt(precio)
        carrito.innerHTML += 
        `<div><div class="input-group">
        <button class="btn btn-sm btn-warning" onclick="aumentar(${codigoVenta})" name="aumenta" id="aumenta">+</button>
        <input type="number" readonly min="1" max="20" value=${cantidad} size="1" class="form-sm lg-2" placeholder="1" aria-label="Cantidad" id="numCant">
        <button class="btn btn-sm btn-warning"  onclick="disminuir(${codigoVenta})" name="disminuye" id="disminuye">-</button>                   
        </div></div>   
        <div><p>${nombre}</p></div>
        <div><p>${precio}</p></div>
        <div><p>${subt}</p></div>
        <div><a class="nav-link link-success btn-borrar" data-bs-toggle="tooltip" title data-bs-original-title="Eliminar Producto" onclick="borrarProducto(${element.codigoVenta})" href="#"><img class="icon" src="../img/trash3.svg" alt="Borrar"></a></div>`
    }) 
    let totalCant = carritoLS.map(item => item.cantidad).reduce((ant, act) => ant + act, 0 )
    contador.innerHTML = totalCant
    totalMonto()
}

function aumentar(codigoVenta) {
    numCant.value = parseInt(numCant.value) + 1
    
    const productoAgregado = carritoLS.find(producto => producto.codigoVenta == codigoVenta);
    carritoLS.includes(productoAgregado) && ++productoAgregado.cantidad
    carroJSON = JSON.stringify(carritoLS)
    localStorage.setItem("carroLS", carroJSON)
    carrito.innerHTML = ""
    actCarro()
}

function disminuir(codigoVenta) {
    const productoAgregado = carritoLS.find(producto => producto.codigoVenta == codigoVenta);
    
    if (productoAgregado.cantidad > 1) {
        numCant.value = parseInt(numCant.value) - 1       
    } else {
        console.log("error")
        return       
    }
    carritoLS.includes(productoAgregado) && --productoAgregado.cantidad
    carroJSON = JSON.stringify(carritoLS)
    localStorage.setItem("carroLS", carroJSON)
    carrito.innerHTML = ""
    actCarro()
}


function totalMonto() {
    let totalMonto = carritoLS.map(item => item.cantidad * item.precio).reduce((ant, act) => ant + act, 0 )
    total.innerText = totalMonto
}    

function borrarProducto(codigoVenta) {
    Swal.fire({
        html: 'Estás seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#CFD586',
        cancelButtonColor: '#4e120a',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No!',
        background: '#fceecd',              
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html: 'Producto eliminado',
                icon: 'success',
                background: '#fceecd',
                confirmButtonColor: '#e79d35'
            })
            let borrado = carritoLS.filter( borr => borr.codigoVenta != codigoVenta)
            carritoLS = borrado.slice()
            carroJSON = JSON.stringify(carritoLS)
            localStorage.setItem("carroLS", carroJSON)
            carrito.innerHTML = ""
            if (carritoLS === null || carritoLS.length === 0){
                carroVacio()
            }
            actCarro()
        }
    })
}

function borrarCarro() {
    Swal.fire({
    html: 'Estás seguro de eliminar TODOS los productos?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#CFD586',
    cancelButtonColor: '#4e120a',
    confirmButtonText: 'Si!',
    cancelButtonText: 'No!',
    background: '#fceecd',   
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
        html: 'Todos los productos han sido eliminados',
        icon: 'success',
        background: '#fceecd',
        confirmButtonColor: '#e79d35'
        })

        localStorage.clear()
        carrito.innerHTML = ""
        contador.innerHTML = 0
        total.innerText = 0
        carroVacio()
    }
    })
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
        setTimeout(() => {
            document.location.href='../index.html'
        }, 2500);
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

function carroVacio() {
    carrito.innerHTML += 
    `<div></div>   
    <div><p>CARRO VACIO</p></div>
    <div><img class="icon" src="../img/cart-x2.svg" alt="Carro vacío"></div>
    <div><p></p></div>
    <div></div>` 

    let btnFinalizar = document.getElementById("btnFinalizar")
    btnFinalizar.classList.add("disabled")
    let btnBorrarCarro = document.getElementById("btnBorrarCarro")
    btnBorrarCarro.classList.add("disabled")    
}




let carritoLS = localStorage.getItem("carroLS")
carritoLS = JSON.parse(carritoLS)

if (carritoLS === null || carritoLS.length === 0){
    carroVacio()
}else{
actCarro()
}
carritoLS.forEach(element => {
    let cont = element.cantidad
});



