import { createContext } from 'react';
import { Product } from '../Model/product';

interface ProductContextType {
  obtenerValorPromedioSegmento: () => Promise<any>;
  obtenerCantidadProductosMarca: () => Promise<any>;
  obtenerValorTotalCategoria: () => Promise<any>;
  productoSeleccionado: Product | null;
  setProductoSeleccionado: (producto: Product | null) => void;
}

export const ProductContext = createContext<ProductContextType>({
  obtenerValorPromedioSegmento: async () => {},
  obtenerCantidadProductosMarca: async () => {},
  obtenerValorTotalCategoria: async () => {},
  productoSeleccionado: null,
  setProductoSeleccionado: () => {},
});