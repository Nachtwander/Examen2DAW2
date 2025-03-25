const { DataTypes } = require('sequelize');
const sequelize = require('../Conexion/Conexion');

const Product = sequelize.define('product', {
    partNumber: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false
    },
    productType: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    category_code: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    brand_code: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    family_code: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    line_code: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    productSegment_code: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    value: {
        type: DataTypes.DECIMAL(20,2),
        allowNull: true
    },
    valueCurrency: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    defaultQuantityUnits: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    plannerCode: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    sourceLink: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'product',
    timestamps: false
});

module.exports = Product;
