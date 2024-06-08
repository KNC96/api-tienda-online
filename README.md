# Documentación de la API de Productos

## Introducción

Esta API proporciona acceso a diferentes categorías de productos, incluyendo productos generales, ofertas, novedades, decoración, seguridad, notebooks, celulares, periféricos y parlantes. Cada endpoint devuelve una lista de 20 productos con información detallada sobre cada producto.

## Endpoints

### Obtener todos los productos

#### `GET /products`

**Descripción**: Devuelve una lista de 20 productos.

**Ejemplo de solicitud**:
```http
GET /products HTTP/1.1
Host: localhost:3000
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

GET /ofertas HTTP/1.1
Host: localhost:3000

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



