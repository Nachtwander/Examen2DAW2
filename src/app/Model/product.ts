export interface Product {
    partNumber: string;
    productType?: string;
    category_code?: string;
    brand_code?: string;
    family_code?: string;
    line_code?: string;
    productSegment_code?: string;
    status?: string;
    value?: number;
    valueCurrency?: string;
    defaultQuantityUnits?: string;
    name?: string;
    description?: string;
    plannerCode?: string;
    sourceLink?: string;
}

// se le coloca los campos como opcionales por que la tabla de la base de datos tiene campos nulos