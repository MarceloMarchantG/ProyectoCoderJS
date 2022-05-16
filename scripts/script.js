
// Variables
let item = ""

let detalle = ""
let totalCarro = ""
let totalMonto = 0

// Se declara array
let productos = []
// Se define la clase para crear los objetos
class Producto {
    constructor(tipo, codigoVenta, nombre, precio, cantidad, estado, descripcion, imagen) {
        this.tipo = tipo.toUpperCase();
        this.codigoVenta = codigoVenta.toUpperCase();
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.cantidad = 1;
        this.estado = "activo";
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

// Se crean los objetos
productos.push(new Producto("h", "11", "Rod Big Boss", 6500, 1,"", "Jugosa hamburguesa doble con cheddar, tocino, aros de cebolla y un huevo frito.", "img/h-rod-big-boss.jpeg"))
productos.push(new Producto("h", "12", "Rod Dills", 5500, 1, "", "Jugosa hamburguesa sobre cama de lechuga, con cheddar pepinillos y mayonesa casera, simplemente deliciosa.", "img/h-rod-dills.jpeg"))
productos.push(new Producto("h", "13", "Rod Spicy", 6600, 1, "", "Para los amantes del picante, deliciosa hamburguesa con cheddar, jalapeño, cebolla morada en cuadritos, papas hilo y la salsa secreta de la casa.", "img//h-rod-spicy.jpeg"))
productos.push(new Producto("h", "14", "Rod Champi", 6900, 1, "", "Deliciosa hamburguesa sobre una cama de lechuga y tomate, cubierta con champiñones salteados, cebolla caramelizada y palta.", "img/h-rod-champi.jpeg"))
productos.push(new Producto("h", "15", "Rod Guaca Guaca", 6900, 1, "", "Jugosa hamburguesa con cheddar sobre una cama de lechuga, cubierta con pepinillos y el delicioso guacamole de la casa.", "img//h-rod-guacamole.jpeg"))
productos.push(new Producto("h", "16", "Rod Big Boss Special", 7500, 1, "", "Jugosa hamburguesa doble con cheddar, tocino, aros de cebolla y un huevo frito más tomate lechuga y cebolla morada.", "img//h-rod-big-boss-special.jpeg"))
productos.push(new Producto("h", "17", "Rod Champi-oink Triple", 8500, 1, "", "Tres hamburguesas (si, 3) con cheddar, champiñones salteados, cebolla caramelizada y palta. Solo para valientes.", "img/h-rod-champi-oink-triple.jpeg" ))
productos.push(new Producto("h", "18", "Rod La Fresquita", 4990, 1, "", 'Deliciosas croqueta de "poroto negro-quinoa-mani" sobre cama de lechuga y tomate, con pepinillos y cebolla morada.', "img/h-rod-la-fresquita-veggie.jpeg"))
productos.push(new Producto("s", "21","Rod Bacon Fries", 3500, 1, "", "Crujientes papas fritas cubiertas con queso cheddar y tocino.", "img/a-rod-bacon-fries.jpeg"))
productos.push(new Producto("s", "22", "Rod Guaca Fries", 3700, 1, "", "Crujientes papas fritas cubiertascon un exquisito guacamole.", "img/a-rod-guaca-fries.jpeg"))
productos.push(new Producto("s", "23", "Rod Jalapeño Fries", 3700, 1, "", "Crujientes papas fritas cubiertas con cheddar y ají jalapeño.", "img/a-rod-jalapeno-fries.jpeg" ))
productos.push(new Producto("s", "24", "Canasta Nugget", 3700, 1, "", "Deliciosos nuggets, empanaditas de queso y papas fritas. Un clásico.", "img/a-canasta-nugget.jpeg" ))
productos.push(new Producto("b", "31", "Coca Cola", 1000, 1, "", "Lata 350cc", "img/coca-cola.jpg"))
productos.push(new Producto("b", "32", "Fanta", 1000, 1, "", "Lata 350cc", "img/fanta.jpg"))
productos.push(new Producto("b", "33", "Sprite", 1000, 1, "", "Lata 350cc", "img/sprite.jpg" ))
productos.push(new Producto("b", "34", "Jugo del Valle", 1000, 1, "", "Botella 300cc", "img/jugo-naranja.png" ))

let listadoCodigos = ["H1" ,"H2", "H3", "H4", "H5", "H6", "H7", "H8", "S1", "S2", "S3", "S4", "B1", "B2", "B3", "B4"]


let hamburguesa = document.getElementById("hamburguesas");
let starter = document.getElementById("starters");
let bebida = document.getElementById("bebidas")

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


for (let producto of productos){
    if(producto.tipo == "H"){
        Carta(hamburguesa, producto);
    } else if (producto.tipo == "S"){
        Carta(starter, producto);
    } else if (producto.tipo == "B"){
        Carta(bebida, producto)
    }
}


//const cantidad = document.getElementsByClassName("form-sm")

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

let total = document.getElementById("total")    
let carrito = document.getElementById("carrito")
let contador = document.getElementById("contador")

let totcant = 0

let carro = []



let carroJSON = []

document.addEventListener("DOMContentLoaded", function(){
    carritoLS = JSON.parse(localStorage.getItem("carroLS"))
    carro = carritoLS.slice()


    let totalCant = carro.map(item => item.cantidad).reduce((ant, act) => ant + act, 0 )
    contador.innerHTML = totalCant

})



function AgregarAlCarro (codigoVenta) {
   
    const productoAgregado = productos.find(producto => producto.codigoVenta == codigoVenta);
    if (carro.includes(productoAgregado)) {
        ++ productoAgregado.cantidad 
    } else {
        carro.push(productoAgregado)
        
        }
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










