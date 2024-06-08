Documentación de la API de Productos
Introducción
Esta API proporciona acceso a diferentes categorías de productos, incluyendo productos generales, ofertas, novedades, decoración, seguridad, notebooks, celulares, periféricos y parlantes. Cada endpoint devuelve una lista de 20 productos con información detallada sobre cada producto.

Endpoints
Obtener todos los productos
GET /products
Descripción: Devuelve una lista de 20 productos.

Ejemplo de solicitud:

GET /products HTTP/1.1
Host: localhost:3000

Ejemplo de respuesta:

[
  {
    "name": "Producto 1",
    "price": 10,
    "description": "Descripción del producto 1",
    "quantity": 5
  },
  ...
  {
    "name": "Producto 20",
    "price": 200,
    "description": "Descripción del producto 20",
    "quantity": 100
  }
]

Obtener todas las ofertas
GET /ofertas
Descripción: Devuelve una lista de 20 ofertas.

Ejemplo de solicitud:

GET /ofertas HTTP/1.1
Host: localhost:3000

Ejemplo de respuesta:

[
  {
    "name": "Oferta 1",
    "price": 8,
    "description": "Descripción de la oferta 1",
    "quantity": 3
  },
  ...
  {
    "name": "Oferta 20",
    "price": 160,
    "description": "Descripción de la oferta 20",
    "quantity": 60
  }
]

Obtener todas las novedades
GET /novedades
Descripción: Devuelve una lista de 20 novedades.

Ejemplo de solicitud:

GET /novedades HTTP/1.1
Host: localhost:3000
Ejemplo de respuesta:

[
  {
    "name": "Novedad 1",
    "price": 12,
    "description": "Descripción de la novedad 1",
    "quantity": 4
  },
  ...
  {
    "name": "Novedad 20",
    "price": 240,
    "description": "Descripción de la novedad 20",
    "quantity": 80
  }
]
Obtener todos los productos de decoración
GET /decoracion
Descripción: Devuelve una lista de 20 productos de decoración.

Ejemplo de solicitud:

GET /decoracion HTTP/1.1
Host: localhost:3000
Ejemplo de respuesta:

[
  {
    "name": "Decoración 1",
    "price": 15,
    "description": "Descripción de la decoración 1",
    "quantity": 6
  },
  ...
  {
    "name": "Decoración 20",
    "price": 300,
    "description": "Descripción de la decoración 20",
    "quantity": 120
  }
]
Obtener todos los productos de seguridad
GET /seguridad
Descripción: Devuelve una lista de 20 productos de seguridad.

Ejemplo de solicitud:

GET /seguridad HTTP/1.1
Host: localhost:3000
Ejemplo de respuesta:

[
  {
    "name": "Seguridad 1",
    "price": 20,
    "description": "Descripción del producto de seguridad 1",
    "quantity": 7
  },
  ...
  {
    "name": "Seguridad 20",
    "price": 400,
    "description": "Descripción del producto de seguridad 20",
    "quantity": 140
  }
]
Obtener todas las notebooks
GET /notebooks
Descripción: Devuelve una lista de 20 notebooks.

Ejemplo de solicitud:

GET /notebooks HTTP/1.1
Host: localhost:3000
Ejemplo de respuesta:

[
  {
    "name": "Notebook 1",
    "price": 100,
    "description": "Descripción de la notebook 1",
    "quantity": 2
  },
  ...
  {
    "name": "Notebook 20",
    "price": 2000,
    "description": "Descripción de la notebook 20",
    "quantity": 40
  }
]
Obtener todos los celulares
GET /celulares
Descripción: Devuelve una lista de 20 celulares.

Ejemplo de solicitud:

GET /celulares HTTP/1.1
Host: localhost:3000
Ejemplo de respuesta:

[
  {
    "name": "Celular 1",
    "price": 90,
    "description": "Descripción del celular 1",
    "quantity": 5
  },
  ...
  {
    "name": "Celular 20",
    "price": 1800,
    "description": "Descripción del celular 20",
    "quantity": 100
  }
]
Obtener todos los periféricos
GET /perifericos
Descripción: Devuelve una lista de 20 periféricos.

Ejemplo de solicitud:

GET /perifericos HTTP/1.1
Host: localhost:3000
Ejemplo de respuesta:

[
  {
    "name": "Periférico 1",
    "price": 30,
    "description": "Descripción del periférico 1",
    "quantity": 8
  },
  ...
  {
    "name": "Periférico 20",
    "price": 600,
    "description": "Descripción del periférico 20",
    "quantity": 160
  }
]
Obtener todos los parlantes
GET /parlantes
Descripción: Devuelve una lista de 20 parlantes.

Ejemplo de solicitud:

GET /parlantes HTTP/1.1
Host: localhost:3000

Ejemplo de respuesta:

[
  {
    "name": "Parlante 1",
    "price": 40,
    "description": "Descripción del parlante 1",
    "quantity": 9
  },
  ...
  {
    "name": "Parlante 20",
    "price": 800,
    "description": "Descripción del parlante 20",
    "quantity": 180
  }
]
