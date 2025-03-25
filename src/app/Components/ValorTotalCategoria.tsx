'use client';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useProductContext } from '../Provider/ProductProvider';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const ValorTotalCategoria: React.FC = () => {
  const { obtenerValorTotalCategoria } = useProductContext();
  const [chartData, setChartData] = useState<any>({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerValorTotalCategoria();
      setChartData({
        labels: data.map((item: any) => item.category_code),
        datasets: [{
          label: 'Valor Total por Categoria',
          data: data.map((item: any) => item.valor_total),
          backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF8C00', '#8B00FF', '#00FFFF'],
        }],
      });
    };
    fetchData();
  }, [obtenerValorTotalCategoria]);

  return (
    <div>
      <h2>Valor Total por Categoria</h2>
      <Doughnut data={chartData} options={{ responsive: true }} height={200} width={200} />
    </div>
  );
};

export default ValorTotalCategoria;