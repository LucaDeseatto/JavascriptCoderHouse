// // Variable

// let nombre; //Declaracion de variable
// let apellidoMaterno;
// let apellidoPaterno;
// let edad;
// let temperatura;


// //Asignar valores

// nombre="Luca";//Asignacion 

// apellidoMaterno="Agusti";

// apellidoPaterno="Deseatto";//valor de tipo string.


// //Los valores numericos se colocan sin comillas.

// edad=20;//valor de tipo numerico. Enteros o decimales.
// temperatura=24.8;

// //Reasignacion

// temperatura=30.5;

// //Inicializacion de variable

// let num1 = 80;//Inicializando
// const PI = 3.1415;//una Constante debe ser obligatorio inicializarla.
// const GRAVEDAD = 9.8;

// let nombreCompleto = nombre + " " + apellidoPaterno;// Concatenacion de variables.

// ////Metodos de entrada y salida.////

// // console.log("Mi nombre es:" + nombreCompleto);

// // alert("Hola " + nombre);

// // let usuario = prompt("Ingrese su nombre :");
// // let edadusuario = prompt("Ingrese su edad :");
// // console.log(usuario);
// // console.log(edadusuario);



// let numero1 = prompt("Ingrese un numero :");
// let numero2 = parseFloat(prompt("Ingrese un segundo numero :"));
// numero1 = parseFloat(numero1);

// let resultado = numero1 + numero2;//concatenacion
// alert(resultado);


//Ejercicio 1

// let nombre = "Luca";
// let apellido = "Deseatto";
// let edad = 20;
// console.log(nombre);
// console.log(apellido);
// console.log(edad);

//Ejercicio 2

// const ciudad1 = "Springfield";
// const ciudad2 = "San Nicolas";
// const ciudad3 = "Rosario";
// const ciudad4 = "San Bernardo";
// const ciudad5 = "Mar del plata";
// console.log(ciudad1);
// console.log(ciudad2);
// console.log(ciudad3);
// console.log(ciudad4);
// console.log(ciudad5);

//Ejercicio 3

// let persona    = "BART SIMPSON";
// let domicilio  = "742 EVERGREEN";
// let pais       = "USA";
// let nacimiento = "02-11-70";
// const codigo   = "B47U89RE243";
// let carnet = "Codigo: "+codigo+" "+
// "Nombre: "+persona+" "+
// "Pais: "+pais+" "+
// "Nacimiento: "+nacimiento+" "+
// "Domicilio: "+domicilio;
// console.log(carnet);

//Ejercicio 4

// let integrante1 = prompt('INGRESAR 1er INTREGANTE');
// let integrante2 = prompt('INGRESAR 2do INTREGANTE');
// let integrante3 = prompt('INGRESAR 3er INTREGANTE');
// let integrante4 = prompt('INGRESAR 4to INTREGANTE');
// let integrante5 = prompt('INGRESAR 5to INTREGANTE');
// let familia =   "1) "+integrante1+" "+
//                 "2) "+integrante2+" "+
//                 "3) "+integrante3+" "+
//                 "4) "+integrante4+" "+
//                 "5) "+integrante5;
// console.log(familia);

//Ejercicio 5

// let precio = parseFloat(prompt("Ingrese un precio"));
// let descuento20 = precio - (precio * 0.2); 
// let descuento30 = precio - (precio * 0.3);
// console.log(descuento20);
// console.log(descuento30);

// // Definir una clase Producto para representar los productos en la tienda
// class Producto {
//     constructor(nombre, precio) {
//       this.nombre = nombre;
//       this.precio = precio;
//     }
//   }
  
//   // Definir la función de orden superior para calcular el total del carrito
//   function calcularTotal(carrito) {
//     return carrito.reduce((total, producto) => total + producto.precio, 0);
//   }
  
//   // Función principal del simulador
//   function simuladorTienda() {
//     const carrito = []; // Inicializar el carrito vacío
  
//     while (true) {
//       const opcion = prompt(
//         "Ingrese 1 para agregar un producto al carrito, 2 para ver el carrito, o 3 para salir:"
//       );
  
//       switch (opcion) {
//         case "1":
//           const nombreProducto = prompt("Ingrese el nombre del producto:");
//           const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
//           const producto = new Producto(nombreProducto, precioProducto);
//           carrito.push(producto);
//           alert(`${nombreProducto} agregado al carrito.`);
//           break;
//         case "2":
//           if (carrito.length === 0) {
//             alert("El carrito está vacío.");
//           } else {
//             let mensaje = "Productos en el carrito:\n";
//             carrito.forEach((producto, index) => {
//               mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
//             });
//             mensaje += `Total: $${calcularTotal(carrito).toFixed(2)}`;
//             alert(mensaje);
//           }
//           break;
//         case "3":
//           alert("Gracias por su compra.");
//           return; // Salir de la función
//         default:
//           alert("Opción inválida. Por favor, ingrese 1, 2 o 3.");
//       }
//     }
//   }
  
//   // Ejecutar la función principal
//   simuladorTienda();
  

// Definimos la estructura del carrito como un array de objetos
let carrito = [];

// Función para agregar un producto al carrito
function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    
    if (!isNaN(precio)) {
        carrito.push({ nombre: nombre, precio: precio });
        alert("Producto agregado al carrito.");
    } else {
        alert("Precio inválido. Producto no agregado.");
    }
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    let contenido = "Contenido del carrito:\n";
    if (carrito.length === 0) {
        contenido += "El carrito está vacío.";
    } else {
        carrito.forEach(function(producto, index) {
            contenido += `${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}\n`;
        });
        contenido += `Total: $${calcularTotal().toFixed(2)}`;
    }
    alert(contenido);
}

// Función para calcular el total de la compra
function calcularTotal() {
    return carrito.reduce(function(total, producto) {
        return total + producto.precio;
    }, 0);
}

// Función de orden superior I: Filtrar productos por precio
function filtrarPorPrecio(maxPrecio) {
    return carrito.filter(function(producto) {
        return producto.precio <= maxPrecio;
    });
}

// Función de orden superior II: Aplicar descuento a los productos
function aplicarDescuento(descuento) {
    carrito.forEach(function(producto) {
        producto.precio -= producto.precio * (descuento / 100);
    });
    alert(`Descuento del ${descuento}% aplicado a todos los productos.`);
}

// Ejemplo de uso del carrito
agregarProducto();
agregarProducto();
mostrarCarrito();
aplicarDescuento(10);
mostrarCarrito();












