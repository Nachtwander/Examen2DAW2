'use client';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useProductContext } from '../Provider/ProductProvider';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface DataItem {
  segment: string;
  category: string;
  valorPromedio: number;
}

const ValorPromedio: React.FC = () => {
  const { obtenerValorPromedioSegmento } = useProductContext();
  const [chartData, setChartData] = useState<any>({ datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data: DataItem[] = await obtenerValorPromedioSegmento();

      // Obtener segmentos y categorias unicos
      const segmentos: string[] = [...new Set(data.map((item) => item.segment))];
      const categorias: string[] = [...new Set(data.map((item) => item.category))];

      // Organizar los valores por categoria
      const valuesByCategory: { [key: string]: number[] } = categorias.reduce((acc: { [key: string]: number[] }, category: string) => {
        acc[category] = segmentos.map((segment: string) => {
          // Filtrar los datos por segmento y categoría
          const segmentData = data.filter((item) => item.segment === segment && item.category === category);
          return segmentData.length ? segmentData[0].valorPromedio : 0;
        });
        return acc;
      }, {});

      // Crear los datasets para el grafico
      const datasets = categorias.map((category: string) => ({
        label: category,
        data: valuesByCategory[category],
        fill: false,
        borderColor: getRandomColor(),
        tension: 0.1,
      }));

      setChartData({
        labels: segmentos,
        datasets,
      });
    };

    fetchData();
  }, [obtenerValorPromedioSegmento]);

  // Funcion para generar un color aleatorio para cada línea
  const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <h2>Valor Promedio de Productos por Segmento y Categoria</h2>
      <Line data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default ValorPromedio;
