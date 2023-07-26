// Variables de JS necesarias
const productos = [
  { nombre: 'Camiseta', precio: 20 },
  { nombre: 'Pantalon', precio: 30 },
  { nombre: 'Zapatos', precio: 50 },
];

const carrito = [];

// Funciones esenciales del proceso a simular
function obtenerCantidad(producto) {
  const cantidad = prompt(`Ingrese la cantidad de ${producto.nombre} que desea comprar:`);
  return parseInt(cantidad);
}

function agregarProductoAlCarrito(producto, cantidad) {
  carrito.push({ producto, cantidad });
}

function calcularTotalCompra() {
  let total = 0;
  for (const item of carrito) {
    total += item.producto.precio * item.cantidad;
  }
  return total;
}

// Capturar entradas y simular el carrito de compras
for (const producto of productos) {
  const cantidad = obtenerCantidad(producto);
  agregarProductoAlCarrito(producto, cantidad);
}

// Efectuar una salida utilizando console.log() y alert()
const totalCompra = calcularTotalCompra();
console.log('Carrito de compras:', carrito);
console.log('Total de la compra:', totalCompra);
alert(`El total de la compra es: $${totalCompra}`);
