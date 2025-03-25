'use client';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useProductContext } from '../Provider/ProductProvider';

// Registrar componentes de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const ProductosMarca: React.FC = () => {
  const { obtenerCantidadProductosMarca } = useProductContext();
  const [chartData, setChartData] = useState<any>({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerCantidadProductosMarca();
      setChartData({
        labels: data.map((item: any) => item.brand_code),
        datasets: [{
          label: 'Cantidad de Productos por Marca',
          data: data.map((item: any) => item.cantidad_productos),
          backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
        }],
      });
    };
    fetchData();
  }, [obtenerCantidadProductosMarca]);

  return (
    <div>
      <h2>Cantidad de Productos por Marca</h2>
      <Pie data={chartData} options={{ responsive: true }} height={200} width={200} />
    </div>
  );
};

export default ProductosMarca;
