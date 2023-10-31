window.onload = function () {

    let ordenes = JSON.parse(localStorage.getItem('ordenes'));
    const cocinaDiv = document.getElementById('cocina');

    console.log(ordenes);

    if (ordenes && ordenes.length > 0) {
        ordenes.forEach((orden, index) => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'orden';
            orderDiv.innerHTML = `
                <p>Mesa: ${orden.mesa}</p>
                <p>Entradas: ${orden.entradas} (Cantidad: ${orden.entradas_cantidad})</p>
                <p>Alimentos: ${orden.alimentos} (Cantidad: ${orden.alimentos_cantidad})</p>
                <p>Bebidas: ${orden.bebidas} (Cantidad: ${orden.bebidas_cantidad})</p>
                <p>Postres: ${orden.postres} (Cantidad: ${orden.postres_cantidad})</p>
                <p>Fecha: ${orden.fecha}</p>
                <button onclick="eliminarOrden(${index})">Eliminar</button>
            `;
            cocinaDiv.appendChild(orderDiv);
        });
    }
}

function eliminarOrden(index) {
    const ordenes = JSON.parse(localStorage.getItem('ordenes'));
    ordenes.splice(index, 1);
    localStorage.setItem('ordenes', JSON.stringify(ordenes));

    // Recargar la página para mostrar las órdenes actualizadas
    location.reload();
}
