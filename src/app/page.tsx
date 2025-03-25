"use client";
import ValorTotalCategoria from "./Components/ValorTotalCategoria";
import ProductosMarca from "./Components/ProductosMarca";
import ValorPromedio from "./Components/ValorPromedio";
import DatosProducto from "./Components/DatosProduuctos";

export default function Home() {
  return (
    <>
      <ValorPromedio></ValorPromedio>
      <ProductosMarca></ProductosMarca>
      <ValorTotalCategoria></ValorTotalCategoria>
    </>
  );
}
