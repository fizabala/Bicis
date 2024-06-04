function insertarCard(travesia, i, travesias) {
    const card = crearCard(travesia);
    controlVacantes(card);
    renderizarCard(card);
  }
  
  function crearCard(travesia) {
    const divCard =document.createElement('div');
    const img = document.createElement('img');
    
    divCard.classList.add('card');
  
    // desestructuración de array
    const nombre = travesia.nombre;
    const fecha = travesia.fecha;
    const vacantes = travesia.vacantes;
    const urlImg = travesia.urlImg;
    
    divCard.innerHTML = `
       <img src=${travesia.urlImg}/> 
       <h2>${nombre}</h2>
       <p>Fecha: ${fecha}</p>
       <p>Vacantes: ${vacantes}</p>`;
  
    return divCard;
  }
  
  function controlVacantes(card) {
    console.log();
    if(obtenerVacantes(card) < 9){
      card.classList.add('bajo-vacantes')
    }
  }
  
  function obtenerVacantes(card){
    let parrafos = card.querySelectorAll('p');
    let parrafoVacantes = parrafos[1];
    let contenidoParrafo = parrafoVacantes.textContent
  
    let vacantesValor = contenidoParrafo.split(':')[1];
  
    return parseInt(vacantesValor);
  }
  
  function renderizarCard(card){
    const container = document.querySelector('#container');
    container.appendChild(card);
  }