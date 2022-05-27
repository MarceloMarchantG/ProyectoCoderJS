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

let productosJSON = JSON.stringify(productos)
console.log(productos)
console.log(productosJSON)


let recover = []

fetch("../data/productos.json")
    .then ((resp) => resp.json())
    .then ( (data) => {
        console.log(data)
    }

    )