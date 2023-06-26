const menu=document.querySelectorAll('.opcion')

menu.forEach(function(e){

  e.addEventListener('click',function(click){
    
    if(e.children[1].classList.value !=='submenu activo'){
      e.children[1].classList.add('activo')
      e.children[0].classList.remove('bi-chevron-right')
      e.children[0].classList.add('bi-chevron-down')
    }
      else{
        e.children[1].classList.remove('activo')
        e.children[0].classList.remove('bi-chevron-down')
        e.children[0].classList.add('bi-chevron-right')
    
      }
  })
})

/*  cambio icono en elemento del menu seleccionado */

const seleccion=document.querySelectorAll('.seleccion')

seleccion.forEach(function (miLi){
miLi.addEventListener('click',function(e){
const icono = miLi.querySelector('i');
  e.stopPropagation()
  
    if (icono.classList.contains('fa-square')) {
    icono.classList.remove('fa-square');
    icono.classList.add('fa-square-check');
    
      
    } else {
    icono.classList.remove('fa-square-check');
    icono.classList.add('fa-square');
    }

  })
})  

/* MUESTRA PRODUCTOS PAGINACION --------------- */

const productosContainer = document.getElementById('productosContainer');
const paginacion = document.getElementById('paginacion');

const productos = [
    // Agrega tus productos aquí
    { id: 1, nombre: 'https://m.media-amazon.com/images/I/81I+I0iO69L._AC_UX679_.jpg' },
    { id: 2, nombre: 'https://m.media-amazon.com/images/I/815AJVwQUAL._AC_UX679_.jpg' },
    { id: 3, nombre: 'https://m.media-amazon.com/images/I/71hOka9uBQL._AC_UX679_.jpg' },
    { id: 4, nombre: 'https://m.media-amazon.com/images/I/81x5DAhXrrL._AC_UX679_.jpg' },
    { id: 5, nombre: 'https://m.media-amazon.com/images/I/61Cmi5UmD1L._AC_UX679_.jpg' },
    { id: 6, nombre: 'https://m.media-amazon.com/images/I/61FFHZqj20L._AC_UX679_.jpg' },
    { id: 7, nombre: 'https://m.media-amazon.com/images/I/81y+gEtO7KL._AC_UX679_.jpg' },
    { id: 8, nombre: 'https://m.media-amazon.com/images/I/71N4zuY8XcL._AC_UX679_.jpg' },
    { id: 9, nombre: 'https://m.media-amazon.com/images/I/91ejpOp8APL._AC_UY741_.jpg' },
    { id: 10, nombre: 'https://m.media-amazon.com/images/I/61mvRXYREKL._AC_UX679_.jpg' },
    { id: 11, nombre: 'https://m.media-amazon.com/images/I/61I098OIVeL._AC_UX679_.jpg' },
    { id: 12, nombre: 'https://m.media-amazon.com/images/I/81WW-j1ozyL._AC_UX569_.jpg' },
    { id: 13, nombre: 'https://m.media-amazon.com/images/I/81Ia5XWzO7L._AC_UY741_.jpg' },
    { id: 14, nombre: 'https://m.media-amazon.com/images/I/81PXddF-HlL._AC_UX679_.jpg' },
    { id: 15, nombre: 'https://m.media-amazon.com/images/I/51rWqIKO5kL._AC_UX679_.jpg' },
    { id: 16, nombre: 'https://m.media-amazon.com/images/I/61J4oOMZZfL._AC_UX679_.jpg' },
    { id: 17, nombre: 'https://m.media-amazon.com/images/I/61f-U7-IOTL._AC_UX679_.jpg' },
    { id: 18, nombre: 'https://m.media-amazon.com/images/I/51Zss12T4jL._AC_UX679_.jpg' },
    { id: 19, nombre: 'https://m.media-amazon.com/images/I/81gvpEp7gdL._AC_UX569_.jpg' },
    { id: 20, nombre: 'https://m.media-amazon.com/images/I/81m07Gd6BCL._AC_UX679_.jpg' },
    { id: 21, nombre: 'https://m.media-amazon.com/images/I/71OqohqAj5L._AC_UX679_.jpg' },
    
  ];

const productosPorPagina = 9;
let paginaActual = 1;

function mostrarProductos() {
  productosContainer.innerHTML = '';
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = productos.slice(inicio, fin);

  productosPagina.forEach(producto => {
    const divProducto = document.createElement('div');
    productosContainer.innerHTML += `  
    <div class="caja_producto">
        <div class="caja_img">
            <img src=${producto.nombre} alt="">
        </div>
        <div  class="detalle_producto">
            <span>Nombre</span>
            <span>$precio</span>
        </div>
        <div  class="texto_producto">
            <span>Detalle</span>
        </div>
    </div>`;   

  });
}

function crearBotonesPaginacion() {
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  paginacion.innerHTML = '';

  const botonAnterior = document.createElement('button');
  botonAnterior.innerHTML = 'Previo';
  botonAnterior.disabled = paginaActual === 1;
  botonAnterior.addEventListener('click', () => {
    if (paginaActual > 1) {
      paginaActual--;
      mostrarProductos();
      crearBotonesPaginacion();
    }
  });
  paginacion.appendChild(botonAnterior);

  for (let i = 1; i <= totalPaginas; i++) {
    const boton = document.createElement('button');
    boton.textContent = i;
    boton.classList.add('pagina-btn');
    if (i === paginaActual) {
      boton.classList.add('active');
    }
    boton.addEventListener('click', () => {
      paginaActual = i;
      mostrarProductos();
      crearBotonesPaginacion();
    });
    paginacion.appendChild(boton);
  }

  const botonSiguiente = document.createElement('button');
  botonSiguiente.innerHTML = 'Siguiente';
  botonSiguiente.disabled = paginaActual === totalPaginas;
  botonSiguiente.addEventListener('click', () => {
    if (paginaActual < totalPaginas) {
      paginaActual++;
      mostrarProductos();
      crearBotonesPaginacion();
    }
  });
  paginacion.appendChild(botonSiguiente);
}

mostrarProductos();
crearBotonesPaginacion();

