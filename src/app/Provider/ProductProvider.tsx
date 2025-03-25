'use client';
import React, { ReactNode, useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Product } from '../Model/product';

interface VistaReact {
  children: ReactNode;
}

// Usando `export default function para el componente
export default function ProductProvider({ children }: VistaReact) {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Product | null>(null);

// Funcion para obtener el valor promedio por segmento y categoria
const obtenerValorPromedioSegmento = async () => {
    try {
      const response = await fetch('http://localhost:5000/valor-promedio-segmento-categoria');
      const data = await response.json();
      
      return data.map((item: any) => ({
        segment: item.productSegment_code,
        category: item.category_code,
        valorPromedio: item.valor_promedio
      }));
    } catch (error) {
      console.error('Error al obtener valor promedio por segmento y categoría:', error);
      return [];
    }
  };
  

  // Funcion para obtener la cantidad de productos por marca
  const obtenerCantidadProductosMarca = async () => {
    try {
      const response = await fetch('http://localhost:5000/cantidad-productos-marca');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener cantidad de productos por marca:', error);
      return [];
    }
  };

  // Funcion para obtener el valor total por categoría
  const obtenerValorTotalCategoria = async () => {
    try {
      const response = await fetch('http://localhost:5000/valor-total-categoria');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener valor total por categoría:', error);
      return [];
    }
  };

  return (
    <ProductContext.Provider
      value={{
        obtenerValorPromedioSegmento,
        obtenerCantidadProductosMarca,
        obtenerValorTotalCategoria,
        productoSeleccionado,
        setProductoSeleccionado,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
