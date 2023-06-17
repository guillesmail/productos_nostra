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


