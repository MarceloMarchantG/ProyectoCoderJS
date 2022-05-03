
// Variables
let item = ""
let cantidad = 0
let detalle = ""
let totalCarro = ""
let totalMonto = 0

// Se declara array
let productos = []
// Se define la clase para crear los objetos
class Producto {
    constructor(tipo, codigoVenta, nombre, precio, estado, descripcion, imagen) {
        this.tipo = tipo.toUpperCase();
        this.codigoVenta = codigoVenta.toUpperCase();
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.estado = "activo";
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

// Se crean los objetos
productos.push(new Producto("h", "h1", "Rod Big Boss", 6500, "", "Jugosa hamburguesa doble con cheddar, tocino, aros de cebolla y un huevo frito.", "img/h-rod-big-boss.jpeg"))
productos.push(new Producto("h", "h2", "Rod Dills", 5500, "", "Jugosa hamburguesa sobre cama de lechuga, con cheddar pepinillos y mayonesa casera, simplemente deliciosa.", "img/h-rod-dills.jpeg"))
productos.push(new Producto("h", "h3", "Rod Spicy", 6600, "", "Para los amantes del picante, deliciosa hamburguesa con cheddar, jalapeño, cebolla morada en cuadritos, papas hilo y la salsa secreta de la casa.", "img//h-rod-spicy.jpeg"))
productos.push(new Producto("h", "h4", "Rod Champi", 6900, "", "Deliciosa hamburguesa sobre una cama de lechuga y tomate, cubierta con champiñones salteados, cebolla caramelizada y palta.", "img/h-rod-champi.jpeg"))
productos.push(new Producto("h", "h5", "Rod Guaca Guaca", 6900, "", "Jugosa hamburguesa con cheddar sobre una cama de lechuga, cubierta con pepinillos y el delicioso guacamole de la casa.", "img//h-rod-guacamole.jpeg"))
productos.push(new Producto("h", "h6", "Rod Big Boss Special", 7500, "", "Jugosa hamburguesa doble con cheddar, tocino, aros de cebolla y un huevo frito más tomate lechuga y cebolla morada.", "img//h-rod-big-boss-special.jpeg"))
productos.push(new Producto("h", "h7", "Rod Champi-oink Triple", 8500, "", "Tres hamburguesas (si, 3) con cheddar, champiñones salteados, cebolla caramelizada y palta. Solo para valientes.", "img/h-rod-champi-oink-triple.jpeg" ))
productos.push(new Producto("h", "h8", "Rod La Fresquita", 4990, "", 'Deliciosas croqueta de "poroto negro-quinoa-mani" sobre cama de lechuga y tomate, con pepinillos y cebolla morada.', "img/h-rod-la-fresquita-veggie.jpeg"))
productos.push(new Producto("s", "a1","Rod Bacon Fries", 3500, "", "Crujientes papas fritas cubiertas con queso cheddar y tocino.", "img/a-rod-bacon-fries.jpeg"))
productos.push(new Producto("s", "a2", "Rod Guaca Fries", 3700, "", "Crujientes papas fritas cubiertascon un exquisito guacamole.", "img/a-rod-guaca-fries.jpeg"))
productos.push(new Producto("s", "a3", "Rod Jalapeño Fries", 3700, "", "Crujientes papas fritas cubiertas con cheddar y ají jalapeño.", "img/a-rod-jalapeno-fries.jpeg" ))
productos.push(new Producto("s", "a4", "Canasta Nugget", 3700, "", "Deliciosos nuggets, empanaditas de queso y papas fritas. Un clásico.", "img/a-canasta-nugget.jpeg" ))
productos.push(new Producto("b", "b1", "Coca Cola", 1000, "", "Lata 350cc", "img/coca-cola.jpg"))
productos.push(new Producto("b", "b2", "Fanta", 1000, "", "Lata 350cc", "img/fanta.jpg"))
productos.push(new Producto("b", "b3", "Sprite", 1000, "", "Lata 350cc", "img/sprite.jpg" ))
productos.push(new Producto("b", "b4", "Jugo del Valle", 1000, "", "Botella 300cc", "img/jugo-naranja.png" ))

let listadoCodigos = ["H1" ,"H2", "H3", "H4", "H5", "H6", "H7", "H8", "S1", "S2", "S3", "S4", "B1", "B2", "B3", "B4"]


let hamburguesa = document.getElementById("hamburguesas");
let starter = document.getElementById("starters");
let bebida = document.getElementById("bebidas")

// Función para generar el cuadro del producto 
function Carta(seccion, producto){
    seccion.innerHTML += 
    `<div class="col">
        <div class="card h-100">
            <img src=${producto.imagen} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>                
            </div>
            <div class="boton-card card-footer">
                <p>$ ${producto.precio}</p>
                <a href="#" class="btn btn-warning">Agregar al carro</a>
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





