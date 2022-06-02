
// Se declaran las variables

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

const hamburguesa = document.getElementById("hamburguesas");
const starter = document.getElementById("starters");
const bebida = document.getElementById("bebidas")

let total = document.getElementById("total")    
let carrito = document.getElementById("carrito")
let contador = document.getElementById("contador")

let productos = []
let carro = []
let carroJSON = []

let totalMonto = 0
let totcant = 0

    //Se declaran las funciones

// Función para generar el cuadro del producto 
function Carta(seccion, producto){
    seccion.innerHTML += 
    `<div class="col">
        <div class="card h-100">
            <img src=${producto.imagen} class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>                
            </div>
            <div class="boton-card card-footer">
                <p>$ ${producto.precio}</p>
                <!-- <div class="input-group">
                    <button class="btn btn-sm btn-warning" onclick="Aumentar()" name="aumenta">+</button>
                    <input type="number" value=${producto.cantidad} size="1" class="form-sm lg-2" placeholder="1" aria-label="Cantidad">
                    <button class="btn btn-sm btn-warning"  onclick="Disminuir()" name="disminuye">-</button>                   
                </div> -->
                <button class="btn btn-warning boton"  onclick="AgregarAlCarro(${producto.codigoVenta})" >Agregar al carro</button>  
            </div>
        </div>
    </div>`
}

function AgregarAlCarro (codigoVenta) {   
    const productoAgregado = productos.find(producto => producto.codigoVenta == codigoVenta);

    carro.includes(productoAgregado) ? ++productoAgregado.cantidad : carro.push(productoAgregado)
    Swal.fire({
        html: 'Se agregó '+ productoAgregado.cantidad +' '+ productoAgregado.nombre + ' a tu carro',
        timer: 1600,
        icon: 'success',
        timerProgressBar: true,
        showConfirmButton: false, 
        background: '#fceecd'     
    })    
    mostrarCarro(carro)
}

function mostrarCarro(prod) {   
    totalMonto = 0
    totcant = 0
    prod.forEach(element => {
        let subt = parseInt(element.cantidad)*parseInt(element.precio)
        totalMonto += subt
        let cont = element.cantidad
        totcant += cont        
        contador.innerText = totcant       
    });
    carroJSON = JSON.stringify(carro)
    localStorage.setItem("carroLS", carroJSON)   
}




fetch("../data/productos.json")
    .then((prod) => prod.json())
    .then((product) => {           
        for (let producto of product){
            if(producto.tipo == "H"){
                Carta(hamburguesa, producto);
            } else if (producto.tipo == "S"){
                Carta(starter, producto);
            } else if (producto.tipo == "B"){
                Carta(bebida, producto)
            }
        }
        productos = product.slice()
    }
)

document.addEventListener("DOMContentLoaded", function(){
    carritoLS = JSON.parse(localStorage.getItem("carroLS"))
    carro = carritoLS.slice()
    let totalCant = carro.map(item => item.cantidad).reduce((ant, act) => ant + act, 0 )
    contador.innerHTML = totalCant
})

