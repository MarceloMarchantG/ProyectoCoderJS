

const pr1 = "PRODUCTO 1";
const pr2 = "PRODUCTO 2";
const pr3 = "PRODUCTO 3";
const pr4 = "PRODUCTO 4";
const pr1Precio = 1000;
const pr2Precio = 1500;
const pr3Precio = 2000;
const pr4Precio = 2300;

let precio = 0;
let item = "";
let resumen = "";
let monto = 0;
let montoProducto = 0;

function subTotal (precio, cantidad) {
    return monto = precio * cantidad;
}


function agregarAlCarrito(producto, cantidad){
    producto = producto.toLowerCase();
    if (producto == "pr1") {
        precio = pr1Precio;
        subTotal(precio, cantidad)
        return item = `       ${cantidad}            ${pr1}      =     $`+ monto;
    } else if (producto == "pr2") {
        precio = pr2Precio;
        subTotal(precio, cantidad)
        return item = `       ${cantidad}           ${pr2}     =     $`+ monto;
    } else if (producto == "pr3") {
        precio = pr3Precio;
        subTotal(precio, cantidad)
        return item = `       ${cantidad}           ${pr3}     =     $`+ monto;    
    } else if (producto == "pr4") {
        precio = pr4Precio;
        subTotal(precio, cantidad)
        return item = `       ${cantidad}           ${pr4}     =     $`+ monto;    
    }
}



for (i = 0; i < 10; i+=1) {
    //let producto = prompt("LISTADO DE PRODUCTOS\n\nCódigo     Nombre        Precio\n    PR1     Producto 1     $1000\n    PR2    Producto 2     $1500\n    PR3    Producto 3     $2000\n\nPor favor ingresa el código del producto\n(Para finalizar la compra ingrese PAGAR)");
    let producto = prompt(`LISTADO DE PRODUCTOS\n\nCódigo       Nombre          Precio\n   PR1      ${pr1}     $${pr1Precio}\n   PR2     ${pr2}     $${pr2Precio}\n   PR3     ${pr3}     $${pr3Precio}\n   PR4     ${pr4}     $${pr4Precio}\nPor favor ingresa el código del producto\n(Para finalizar la compra ingrese PAGAR)`);
    producto = producto.toLowerCase();
        
        if (producto !== "pr1" && producto !== "pr2" && producto !== "pr3" && producto !== "pr4" && producto !== "pagar") {
            alert("Ingresaste un código inexistente\nPor favor, intenta nuevamente.")
            continue
        }
   
    if (producto !== "pagar") {
        let cantidad = parseInt(prompt("Por favor, ingresa la cantidad."))
            
        if (isNaN(cantidad) == true || (parseInt(cantidad) == 0)) {
                alert("Ingresaste un dato erroneo\nPor favor, intenta nuevamente.")
                continue
            }
       
            item = agregarAlCarrito(producto, cantidad)
        
        resumen += item + "\n"
        montoProducto += monto    
    } else {
        break
    }

}
alert("El detalle de su compra es el siguiente:\n\nCantidad          Nombre                Sub Total\n" + resumen +
"                                TOTAL      =     $" + montoProducto  )
