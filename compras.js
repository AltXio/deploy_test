/**
 * Representa un producto dentro de la tienda o sistema.
 */
class Producto {
  /**
   * Crea una instancia de Producto.
   * @param {string} nombre - El nombre del producto.
   * @param {number} precio - El precio unitario del producto.
   * @param {number} cantidad - La cantidad de unidades de este producto.
   */
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  /**
   * Calcula el precio total del producto multiplicando su precio por la cantidad.
   * @returns {number} El costo total de este producto (precio * cantidad).
   */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

/**
Representa el carrito de compras de un usuario.
 */
class Carrito {
  /**
Crea una instancia de Carrito con una lista de productos vacía.
   */
  constructor() {
    /** @type {Producto[]} */
    this.productos = [];
  }


  /**
Agrega un nuevo producto al carrito.
@param {Producto} producto - El objeto Producto a agregar.
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }


  /**
Calcula la suma total de todos los productos en el carrito.
@returns {number} El precio acumulado de todos los artículos.
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }


  /**
Vacía el carrito eliminando todos los productos almacenados.
   */
  vaciarCarrito() {
    this.productos = [];
  }
}

/**
Representa a un usuario del sistema que puede realizar compras.
 */
class Usuario {
  /**
Crea una instancia de Usuario con un carrito de compras propio.
@param {string} nombre - El nombre del usuario.
@param {string} correo - El correo electrónico del usuario.
   */
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }


  /**
Añade un producto al carrito de compras del usuario.
@param {Producto} producto - El producto que se desea añadir.
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }


  /**
Finaliza el proceso de compra, mostrando el total en consola y vaciando el carrito.
   */
  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}


const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
