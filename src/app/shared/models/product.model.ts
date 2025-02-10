// Class to represent the products
export class product {
    id: number = 0;
    amount?: number;
    name?: string;
    price?: number;
}

// Interface for data received from the API
export interface product {
    id: number;
    amount?: number;
    name?: string;
    price?: number;
}