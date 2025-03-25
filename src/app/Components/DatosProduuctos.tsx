
/*COMPONENTE GENERADO CON IA SOLO PARA CORROBORAR QUE EL BACKEND ESTUVIERA RESPONDIENDO */


'use client';
import React, { useEffect, useState } from 'react';
import { useProductContext } from '../Provider/ProductProvider';

const DatosProducto: React.FC = () => {
  const { obtenerValorPromedioSegmento, obtenerCantidadProductosMarca, obtenerValorTotalCategoria } = useProductContext();
  const [valorPromedio, setValorPromedio] = useState<any>([]);
  const [cantidadProductos, setCantidadProductos] = useState<any>([]);
  const [valorTotal, setValorTotal] = useState<any>([]);

  // Obtener los datos cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      const promedioData = await obtenerValorPromedioSegmento();
      setValorPromedio(promedioData);

      const cantidadData = await obtenerCantidadProductosMarca();
      setCantidadProductos(cantidadData);

      const totalData = await obtenerValorTotalCategoria();
      setValorTotal(totalData);
    };

    fetchData();
  }, [obtenerValorPromedioSegmento, obtenerCantidadProductosMarca, obtenerValorTotalCategoria]);

  return (
    <div>
      <h2>Datos de Productos</h2>

      <div>
        <h3>Valor Promedio por Segmento</h3>
        {valorPromedio.length > 0 ? (
          <ul>
            {valorPromedio.map((item: any) => (
              <li key={item.productSegment_code}>
                Segmento: {item.productSegment_code}, Valor Promedio: {item.valor_promedio}
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron datos para el valor promedio por segmento.</p>
        )}
      </div>

      <div>
        <h3>Cantidad de Productos por Marca</h3>
        {cantidadProductos.length > 0 ? (
          <ul>
            {cantidadProductos.map((item: any) => (
              <li key={item.brand_code}>
                Marca: {item.brand_code}, Cantidad de Productos: {item.cantidad_productos}
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron datos para la cantidad de productos por marca.</p>
        )}
      </div>

      <div>
        <h3>Valor Total por Categoría</h3>
        {valorTotal.length > 0 ? (
          <ul>
            {valorTotal.map((item: any) => (
              <li key={item.category_code}>
                Categoría: {item.category_code}, Valor Total: {item.valor_total}
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron datos para el valor total por categoría.</p>
        )}
      </div>
    </div>
  );
};

export default DatosProducto;
