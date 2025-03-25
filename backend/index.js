const express = require('express');
const sequelize = require('./Conexion/Conexion');
const Producto = require('./Modelos/Product');

const app = express();
app.use(express.json());

// Valor promedio de productos por segmento
app.get('/valor-promedio-segmento', async (req, res) => {
    try {
        const resultado = await Producto.findAll({
            attributes: [
                'productSegment_code',
                [sequelize.fn('AVG', sequelize.col('value')), 'valor_promedio']
            ],
            group: ['productSegment_code']
        });
        res.json(resultado);
    } catch (error) {
        res.status(500).send({ 'mensaje': 'Ocurrió un error' });
    }
});

// Cantidad de productos por marca
app.get('/cantidad-productos-marca', async (req, res) => {
    try {
        const resultado = await Producto.findAll({
            attributes: [
                'brand_code',
                [sequelize.fn('COUNT', sequelize.col('partNumber')), 'cantidad_productos']
            ],
            group: ['brand_code']
        });
        res.json(resultado);
    } catch (error) {
        res.status(500).send({ 'mensaje': 'Ocurrió un error' });
    }
});

// Valor total de productos por categoría
app.get('/valor-total-categoria', async (req, res) => {
    try {
        const resultado = await Producto.findAll({
            attributes: [
                'category_code',
                [sequelize.fn('SUM', sequelize.col('value')), 'valor_total']
            ],
            group: ['category_code']
        });
        res.json(resultado);
    } catch (error) {
        res.status(500).send({ 'mensaje': 'Ocurrió un error' });
    }
});

app.listen(5000, () => {
    console.log('Aplicación ejecutando en puerto 5000');
});
