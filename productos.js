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

const productos = [{
  "_id": {
    "$oid": "647e7dec6611e0de13d627ae"
  },
  "titulo": "remera",
  "descripcion": "Camiseta informal algodón importado. Lavar a maquina. Gráfico de logotipo color simil remera. Todos los tamaños.",
  "categoria": "hombre",
  "talle": "x",
  "marca": "adidas",
  "precio": 25000,
  "stock": 30,
  "rating": 2,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/51rWqIKO5kL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/51TNw3LEw2L._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/51O0V+ev+2L._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/51hg12PCopL._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "647e7dec6611e0de13d627af"
  },
  "name": "remeras",
  "descripcion": "Camiseta informal algodón importado. Lavar a maquina. Gráfico de logotipo color simil remera. Todos los tamaños.",
  "categoria": "hombre",
  "talle": "m",
  "marca": "adidas",
  "precio": 25000,
  "stock": 20,
  "rating": 2,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/61J4oOMZZfL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/61UUi2U4O-L._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/61f-U7-IOTL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71Opr-WqdPL._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "647e7dec6611e0de13d627b0"
  },
  "name": "remeras",
  "descripcion": "Camiseta informal algodón importado. Lavar a maquina. Gráfico de logotipo color simil remera. Todos los tamaños.",
  "categoria": "hombre",
  "talle": "m",
  "marca": "adidas",
  "precio": 35000,
  "stock": 10,
  "rating": 3,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/81M6uvpVmoL._AC_UX569_.jpg",
    "https://m.media-amazon.com/images/I/51E4wy073mL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/51Zss12T4jL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/81gvpEp7gdL._AC_UX569_.jpg"
  ]
},{
  "_id": {
    "$oid": "647e7dec6611e0de13d627b1"
  },
  "name": "remeras",
  "descripcion": "Camiseta informal algodón importado. Lavar a maquina. Gráfico de logotipo color simil remera. Todos los tamaños.",
  "categoria": "hombre",
  "talle": "m",
  "marca": "adidas",
  "precio": 15000,
  "stock": 10,
  "rating": 4,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/61nxxGsaLZL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/61AEazJymtL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/81m07Gd6BCL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71OqohqAj5L._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "647e7dec6611e0de13d627b2"
  },
  "name": "remeras",
  "descripcion": "Camiseta informal algodón importado. Lavar a maquina. Gráfico de logotipo color simil remera. Todos los tamaños.",
  "categoria": "hombre",
  "talle": "xl",
  "marca": "adidas",
  "precio": 35000,
  "stock": 10,
  "rating": 1,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/61wEuNyobwL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/51zJauYARkL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71W3t+NfVwL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71EsU-s1RtL._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "647e7dec6611e0de13d627b3"
  },
  "name": "remeras",
  "descripcion": "Elaborado éticamente en Los Ángeles a partir de las telas más tangibles. El lujo cotidiano, una pieza imprescindible para vivir.El algodón más fino, excepcionalmente suave y naturalmente elástico.",
  "categoria": "mujer",
  "talle": "x",
  "marca": "adidas",
  "precio": 35000,
  "stock": 10,
  "rating": 5,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/81ZQlLVRtaL._AC_UX569_.jpg",
    "https://m.media-amazon.com/images/I/81Dvaw+pPFL._AC_UX569_.jpg",
    "https://m.media-amazon.com/images/I/91v6-0kStCL._AC_UX569_.jpg",
    "https://m.media-amazon.com/images/I/61FFueiAA7S._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "647e7dec6611e0de13d627b4"
  },
  "name": "remeras",
  "descripcion": "Elaborado éticamente en Los Ángeles a partir de las telas más tangibles. El lujo cotidiano, una pieza imprescindible para vivir.El algodón más fino, excepcionalmente suave y naturalmente elástico.",
  "categoria": "mujer",
  "talle": "x",
  "marca": "adidas",
  "precio": 25000,
  "stock": 10,
  "rating": 3,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/71APpaAAu4L._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71TMlt3CdML._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71XDZqq-92L._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71BG9PeYiUL._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "647e7dec6611e0de13d627b5"
  },
  "name": "remeras",
  "descripcion": "Elaborado éticamente en Los Ángeles a partir de las telas más tangibles. El lujo cotidiano, una pieza imprescindible para vivir.El algodón más fino, excepcionalmente suave y naturalmente elástico.",
  "categoria": "mujer",
  "talle": "xl",
  "marca": "adidas",
  "precio": 15000,
  "stock": 30,
  "rating": 2,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/61KpzvWKOBL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/61gpXxyPaNL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71bBrQofI8L._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/61YntjE1iaL._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "647e7dec6611e0de13d627b6"
  },
  "name": "remeras",
  "descripcion": "Elaborado éticamente en Los Ángeles a partir de las telas más tangibles. El lujo cotidiano, una pieza imprescindible para vivir.El algodón más fino, excepcionalmente suave y naturalmente elástico.",
  "categoria": "mujer",
  "talle": "x",
  "marca": "adidas",
  "precio": 25000,
  "stock": 20,
  "rating": 2,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/61b88tLoTOL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/61h-nFd2A7L._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/614cAasAHzL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71NMXYw1qsL._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "647e7dec6611e0de13d627b7"
  },
  "name": "remeras",
  "descripcion": "Elaborado éticamente en Los Ángeles a partir de las telas más tangibles. El lujo cotidiano, una pieza imprescindible para vivir.El algodón más fino, excepcionalmente suave y naturalmente elástico.",
  "categoria": "mujer",
  "talle": "x",
  "marca": "adidas",
  "precio": 25000,
  "stock": 20,
  "rating": 4,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/71Pn7UCQDPL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/61g7NW-1wsL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/81QjhhBg48L._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/81P2S14aGXL._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "647ec48b6611e0de13d627b9"
  },
  "titulo": "remera",
  "descripcion": "Sin cierre de cierre. Lavar a maquina. Ajuste cómodo y relajado.De secado rápido, que absorbe la humedad y se estira suavemente",
  "categoria": "mujer",
  "talle": "x",
  "marca": "generica",
  "precio": 15000,
  "stock": 20,
  "rating": 2,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/61ajfNF326L._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/61YyWYJZMIL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/81qYt0Fzm3L._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/81YAf7X5-3L._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "648218a1d42421553412c5c5"
  },
  "titulo": "remera",
  "descripcion": "Ajuste regular: no apretado ni suelto, el ajuste intermedio perfecto. Aspecto deportivo clásico: cuello redondo acanalado que mantiene su forma",
  "categoria": "mujer",
  "talle": "x",
  "marca": "adidas",
  "precio": 26000,
  "stock": 30,
  "rating": 5,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/71VEvqy0E5L._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71heoinq9IL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71heoinq9IL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/71F4iY7FZgL._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "648218a1d42421553412c5c6"
  },
  "titulo": "remera",
  "descripcion": "Ajuste regular: no apretado ni suelto, el ajuste intermedio perfecto. Aspecto deportivo clásico: cuello redondo acanalado que mantiene su forma",
  "categoria": "mujer",
  "talle": "x",
  "marca": "adidas",
  "precio": 33000,
  "stock": 10,
  "rating": 5,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/71MmxxmnzDS._AC_UX522_.jpg",
    "https://m.media-amazon.com/images/I/711exn6XHmS._AC_UX569_.jpg",
    "https://m.media-amazon.com/images/I/61OxewCFvyL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/61btahuN2PL._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "648218a1d42421553412c5c3"
  },
  "titulo": "remera",
  "descripcion": "Ajuste regular: no apretado ni suelto, el ajuste intermedio perfecto. Aspecto deportivo clásico: cuello redondo acanalado que mantiene su forma",
  "categoria": "mujer",
  "talle": "xl",
  "marca": "adidas",
  "precio": 18000,
  "stock": 30,
  "rating": 3,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/414MGT3KKsL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/413SQI+GzyL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/41J3ihnp1yL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/31Nv6ponHnL._AC_UX679_.jpg"
  ]
},{
  "_id": {
    "$oid": "648218a1d42421553412c5c4"
  },
  "titulo": "remera",
  "descripcion": "Ajuste regular: no apretado ni suelto, el ajuste intermedio perfecto. Aspecto deportivo clásico: cuello redondo acanalado que mantiene su forma",
  "categoria": "mujer",
  "talle": "x",
  "marca": "adidas",
  "precio": 39000,
  "stock": 10,
  "rating": 5,
  "url_imagen": [
    "https://m.media-amazon.com/images/I/41GGVqc4lqL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/51Zb1llf6BL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/41E50nKq6PL._AC_UX679_.jpg",
    "https://m.media-amazon.com/images/I/51o23gGUWeL._AC_UX679_.jpg"
  ]
}];

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
            <img src=${producto.url_imagen[1]} alt="">
        </div>
        <div  class="detalle_producto">
            <span>${producto.titulo}</span>
            <span>$${producto.precio}</span>
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

