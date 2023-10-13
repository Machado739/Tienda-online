# Tienda-online
El código JavaScript proporcionado en el paso 2 tiene las siguientes funciones definidas por el usuario y realiza las siguientes acciones:

1. **Función `agregarProductoAlCarrito(producto, cantidad)`**: Esta función toma dos argumentos, `producto` y `cantidad`. Su objetivo es agregar un producto al carrito de compras. Primero verifica si el producto ya está en el carrito, en cuyo caso aumenta la cantidad. Si no está en el carrito, agrega un nuevo elemento al carrito. La función se llama cuando un usuario hace clic en el botón "Agregar al Carrito" en una tarjeta de producto en el catálogo.

2. **Función `actualizarResumenCompra()`**: Esta función se encarga de actualizar el resumen de compra. Limpia el contenido anterior y luego genera una fila de encabezado en la tabla con las columnas "ID," "Descripción," "Cantidad," "Precio Unitario" y "Subtotal." Luego, itera sobre los elementos del carrito y crea una fila en la tabla para cada producto en el carrito. La función también calcula el subtotal y muestra el total general. Esta función se llama cada vez que se agrega o elimina un producto del carrito.

3. **Función `botonComprar.addEventListener("click", () => {...})`**: Esta función se activa cuando un usuario hace clic en el botón "Comprar." Abre una nueva ventana emergente y crea un ticket de compra que muestra los productos, cantidades, precios unitarios, subtotales y el total general. Luego, inserta el contenido del ticket en la ventana emergente.

El tipo de variable `catalogo` es un array de objetos. En el código, `catalogo` contiene una lista de objetos que representan los productos disponibles en la tienda. Cada objeto tiene propiedades como `id`, `imagen`, `precio`, y `descripcion`. Para manipular `catalogo`, se accede a cada elemento del array usando índices.

- `const card = document.createElement("div")` crea un nuevo elemento HTML de tipo `div` y lo almacena en la variable `card`. Este elemento div se utiliza para contener una tarjeta de producto que se mostrará en la página web.

- `card.innerHTML` se usa para definir o modificar el contenido HTML dentro del elemento `div` creado anteriormente. El contenido HTML define cómo se muestra la tarjeta de producto, incluyendo la imagen, el título, el precio, la etiqueta de cantidad y el botón "Agregar al Carrito."

- `catalogoContainer.appendChild(card)` agrega la tarjeta de producto recién creada al contenedor de catálogo en el documento HTML. Esto hace que la tarjeta de producto sea visible en la página web para que los usuarios la vean y la interactúen.
