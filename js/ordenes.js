let ordenes = [];

function guardarOrden(event, mesa) {
  event.preventDefault();

  const entradas = document.getElementById(`ordenMesa1`).elements.entradas.value;
  const entradas_cantidad = document.getElementById(`ordenMesa1`).elements.entradas_cantidad.value;
  const alimentos = document.getElementById(`ordenMesa1`).elements.alimentos.value;
  const alimentos_cantidad = document.getElementById(`ordenMesa1`).elements.alimentos_cantidad.value;
  const bebidas = document.getElementById(`ordenMesa1`).elements.bebidas.value;
  const bebidas_cantidad = document.getElementById(`ordenMesa1`).elements.bebidas_cantidad.value;
  const postres = document.getElementById(`ordenMesa1`).elements.postres.value;
  const postres_cantidad = document.getElementById(`ordenMesa1`).elements.postres_cantidad.value;

  const orden = {
      mesa,
      entradas,
      entradas_cantidad,
      alimentos,
      alimentos_cantidad,
      bebidas,
      bebidas_cantidad,
      postres,
      postres_cantidad,
      fecha: new Date()
  };

  ordenes.push(orden);
  document.getElementById(`ordenMesa1`).reset();

  console.log('Orden realizada:', orden); // Muestra la orden en la consola

}

// Puedes guardar las órdenes en el almacenamiento local para persistencia.
localStorage.setItem('ordenes', JSON.stringify(ordenes));
