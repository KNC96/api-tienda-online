const express = require('express');
const app = express();
const port = 3000;

// Función para generar productos de ejemplo
const generateProducts = (category, priceMultiplier, quantityMultiplier) => {
  return Array.from({ length: 20 }, (v, i) => ({
    name: `${category} ${i + 1}`,
    price: (i + 1) * priceMultiplier,
    description: `Descripción del ${category.toLowerCase()} ${i + 1}`,
    quantity: (i + 1) * quantityMultiplier,
  }));
};

// Arrays de productos para cada categoría
const products = generateProducts('Producto', 10, 5);
const ofertas = generateProducts('Oferta', 8, 3);
const novedades = generateProducts('Novedad', 12, 4);
const decoracion = generateProducts('Decoración', 15, 6);
const seguridad = generateProducts('Seguridad', 20, 7);
const notebooks = generateProducts('Notebook', 100, 2);
const celulares = generateProducts('Celular', 90, 5);
const perifericos = generateProducts('Periférico', 30, 8);
const parlantes = generateProducts('Parlante', 40, 9);

// Rutas para obtener los productos
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/ofertas', (req, res) => {
  res.json(ofertas);
});

app.get('/novedades', (req, res) => {
  res.json(novedades);
});

app.get('/decoracion', (req, res) => {
  res.json(decoracion);
});

app.get('/seguridad', (req, res) => {
  res.json(seguridad);
});

app.get('/notebooks', (req, res) => {
  res.json(notebooks);
});

app.get('/celulares', (req, res) => {
  res.json(celulares);
});

app.get('/perifericos', (req, res) => {
  res.json(perifericos);
});

app.get('/parlantes', (req, res) => {
  res.json(parlantes);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

