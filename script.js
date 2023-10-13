document.addEventListener("DOMContentLoaded", function () {
    const catalogo = [
        { id: 1, imagen: "https://i.imgur.com/lQup1AP.png", precio: 4900.00,descripcion:"PIKACHU EX 001/030 - YOKOHAMA EXCLUSIVE" },
        { id: 2, imagen: "https://i.imgur.com/I0eb69V.png", precio: 1400.00 ,descripcion:"PIKACHU KANAZAWA'S PROMO 144/S-P"},
        { id: 3, imagen: "https://i.imgur.com/EYXcOxC.png", precio: 8.0,descripcion:"FOONGUS 009/197 - COMMON" },
        { id: 4, imagen: "https://i.imgur.com/fQWsyp0.png", precio: 8.00 ,descripcion:"COMBEE 008/197 - COMMON"},
        { id: 5, imagen: "https://i.imgur.com/QF2tfHU.png", precio: 50.00,descripcion:"ALOLAN EXEGGUTOR V 005/078" },
        { id: 6, imagen: "https://i.imgur.com/6Sj2cr7.png", precio: 200.00 ,descripcion:"HO-OH V 140/195"},
        { id: 7, imagen: "https://i.imgur.com/ThAElmO.png", precio: 40.00,descripcion:"IMPOSTER PROFESSOR OAK 73/102 (CELEBRATIONS)" },
        { id: 8, imagen: "https://i.imgur.com/uQuszlI.png", precio: 55.00 ,descripcion:"HISUIAN LILLIGANT V 017/189"},
        { id: 9, imagen: "https://i.imgur.com/jph5ZFQ.png", precio: 35.00 ,descripcion:"SOLROCK 9/102 HOLO"},
        // Agrega más productos aquí
    ];

    const catalogoContainer = document.getElementById("catalogo");
    const resumenCompra = document.getElementById("resumenCompra");
    const total = document.getElementById("total");

    const carrito = [];

    // Genera las tarjetas de productos en el catálogo
    catalogo.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col", "mb-4");
        card.innerHTML = `
        <link rel="stylesheet" href="css/style.css">
            <div class="card">
                <img id="cartas" src="${producto.imagen}" class="card-img-top" alt="${producto.descripcion}">
                <div class="card-body">
                    <h5 class="card-title">${producto.descripcion}</h5>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <label for="cantidadProducto${producto.id}">Cantidad:</label>
                    <input type="number" id="cantidadProducto${producto.id}" value="1" min="1">
                    <button class="btn btn-primary" id="agregarProducto${producto.id}">Agregar al Carrito</button>
                </div>
            </div>
        `;
        catalogoContainer.appendChild(card);

        // Agrega un evento de clic al botón de "Agregar al Carrito"
        const botonAgregar = card.querySelector(`#agregarProducto${producto.id}`);
        botonAgregar.addEventListener("click", function () {
            const cantidad = parseInt(document.getElementById(`cantidadProducto${producto.id}`).value);

            if (cantidad > 0) {
                agregarProductoAlCarrito(producto, cantidad);
            }
        });
    });

    function agregarProductoAlCarrito(producto, cantidad) {
        // Busca si el producto ya está en el carrito
        const productoEnCarrito = carrito.find((item) => item.producto.id === producto.id);

        if (productoEnCarrito) {
            // Si ya está en el carrito, actualiza la cantidad
            productoEnCarrito.cantidad += cantidad;
        } else {
            // Si no está en el carrito, agrega un nuevo elemento al carrito
            carrito.push({ producto, cantidad });
        }

        // Actualiza el resumen de compra
        actualizarResumenCompra();
    }

    function actualizarResumenCompra() {
        // Limpia el resumen de compra
        resumenCompra.innerHTML = "";
        let subtotalTotal = 0;

        carrito.forEach((item) => {
            const fila = document.createElement("tr");
            const subtotal = item.producto.precio * item.cantidad;
            subtotalTotal += subtotal;

            fila.innerHTML = `
                <td>${item.producto.id}</td>
                <td>${item.producto.descripcion}</td>
                <td>${item.cantidad}</td>
                <td>$${item.producto.precio}</td>
                <td>$${subtotal}</td>
            `;
            resumenCompra.appendChild(fila);
        });

        // Actualiza el total
        total.textContent = `$${subtotalTotal}`;
    }

    // Obtén una referencia al botón "Comprar"
    const botonComprar = document.getElementById("botonComprar");

botonComprar.addEventListener("click", () => {
    // Crea una ventana emergente
    const nuevaVentana = window.open("", "Ticket de Compra", "width=500,height=500");

    // Crea el contenido del ticket de compra en la ventana emergente
    let ticketContenido = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ticket de Compra</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div class="ticket">
            <h2>Ticket de Compra</h2>
    `;

    // Agregar cada elemento del carrito al ticket
    carrito.forEach((item) => {
        const subtotal = item.producto.precio * item.cantidad;
        ticketContenido += `
            <div class="item">
                <span class="item-name">${item.producto.descripcion}</span>
                <span class="item-quantity">Cantidad: ${item.cantidad}</span>
                <span class="item-price">$${item.producto.precio.toFixed(2)}</span>
                <span class="item-subtotal">Subtotal: $${subtotal.toFixed(2)}</span>
            </div>
        `;
    });

    // Calcular el total
    const totalCompra = carrito.reduce((total, item) => {
        return total + item.producto.precio * item.cantidad;
    }, 0);

    // Agregar el total al ticket
    ticketContenido += `
        <div class="total">
            <span>Total:</span>
            <span class="total-amount">$${totalCompra.toFixed(2)}</span>
        </div>
    `;

    // Cierre del contenido HTML
    ticketContenido += `
        </div>
    </body>
    </html>
    `;

    // Inserta el contenido en la ventana emergente
    nuevaVentana.document.write(ticketContenido);
});

});
