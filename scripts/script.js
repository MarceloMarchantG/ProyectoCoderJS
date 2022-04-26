
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
    constructor(tipo, codigoVenta, nombre, precio, estado, descripcion) {
        this.tipo = tipo.toUpperCase();
        this.codigoVenta = codigoVenta.toUpperCase();
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.estado = "activo";
        this.descripcion = descripcion;
    }
}

// Se crean los objetos
productos.push(new Producto("h", "h1", "Rod Big Boss", 6500, "", "Jugosa hamburguesa doble con cheddar, tocino, aros de cebolla y un huevo frito."))
productos.push(new Producto("h", "h2", "Rod Dills", 5500, "", "Jugosa hamburguesa sobre cama de lechuga, con cheddar pepinillos y mayonesa casera, simplemente deliciosa."))
productos.push(new Producto("h", "h3", "Rod Spicy", 6600, "", "Para los amantes del picante, deliciosa hamburguesa con cheddar, jalapeño, cebolla morada en cuadritos, papas hilo y la salsa secreta de la casa."))
productos.push(new Producto("h", "h4", "Rod Champi", 6900, "", "Deliciosa hamburguesa sobre una cama de lechuga y tomate, cubierta con champiñones salteados, cebolla caramelizada y palta."))
productos.push(new Producto("h", "h5", "Rod Guaca Guaca", 6900, "", "Jugosa hamburguesa con cheddar sobre una cama de lechuga, cubierta con pepinillos y el delicioso guacamole de la casa."))
productos.push(new Producto("h", "h6", "Rod Big Boss Special", 7500, "", "Jugosa hamburguesa doble con cheddar, tocino, aros de cebolla y un huevo frito más tomate lechuga y cebolla morada."))
productos.push(new Producto("h", "h7", "Rod Champi-oink Triple", 8500, "", "Tres hamburguesas (si, 3) con cheddar, champiñones salteados, cebolla caramelizada y palta. Solo para valientes."))
productos.push(new Producto("h", "h8", "Rod La Fresquita", 4990, "", 'Deliciosas croqueta de "poroto negro-quinoa-mani" sobre cama de lechuga y tomate, con pepinillos y cebolla morada.'))
productos.push(new Producto("a", "a1","Rod Bacon Fries", 3500, "", "Crujientes papas fritas cubiertas con queso cheddar y tocino."))
productos.push(new Producto("a", "a2", "Rod Guaca Fries", 3700, "", "Crujientes papas fritas cubiertascon un exquisito guacamole."))
productos.push(new Producto("a", "a3", "Rod Jalapeño Fries", 3700, "", "Crujientes papas fritas cubiertas con cheddar y ají jalapeño."))
productos.push(new Producto("a", "a4", "Canasta Nugget", 3700, "", "Deliciosos nuggets, empanaditas de queso y papas fritas. Un clásico."))
productos.push(new Producto("b", "b1", "Coca Cola", 1000, "", "Lata 350cc"))
productos.push(new Producto("b", "b2", "Fanta", 1000, "", "Lata 350cc"))
productos.push(new Producto("b", "b3", "Sprite", 1000, "", "Lata 350cc"))
productos.push(new Producto("b", "b4", "Jugo del Valle", 1000, "", "Botella 300cc"))

let listadoCodigos = ["H1" ,"H2", "H3", "H4", "H5", "H6", "H7", "H8", "A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"]

// Se crea el "Menu" para mostrar en el prompt
let menu= ""
for(let producto of productos){
    menu += `   ${producto.codigoVenta}          ${producto.nombre}       =    $${producto.precio}` +"\n"
}

// Función con la que muestro los productos que se agragan al carro y que me entrega el total del producto
function AgregarAlCarro(){productos.forEach(objeto =>{
    if(objeto.codigoVenta === item.toUpperCase()){
        detalle = (`${cantidad} ${objeto.nombre}    $${objeto.precio}   =   $${objeto.precio * cantidad}`);
        monto = objeto.precio * cantidad;
        } 
})
}


do {
    item = prompt("         MENÚ\n* Para comprar ingresa el código del producto, para finalizar ingresa la palabra PAGAR*\nCódigo      Producto     Precio\n"+    
    menu).toUpperCase();
    if((listadoCodigos.includes(item) == false) && (item !== "") && item !== "PAGAR"){
        alert("Ingresaste un código inexistente\nPor favor, intenta nuevamente.")
        continue    
    }

    if(item !== "PAGAR"){
        cantidad = parseInt(prompt("Ingrese la cantidad"));
            if (isNaN(cantidad) === true || (parseInt(cantidad) === 0)) {
                alert("Ingresaste un dato erroneo\nPor favor, intenta nuevamente.")
                continue
            }
    } else {
        break
        }

    AgregarAlCarro()

    alert(`Agregado al Carro\n\n${detalle}`)
    totalCarro += detalle + "\n"
    totalMonto += monto

} while (item !== "PAGAR");

alert(`El detalle de su compra es el siguiente:\n\n${totalCarro}\n
       TOTAL COMPRA      =   $${totalMonto}`)



