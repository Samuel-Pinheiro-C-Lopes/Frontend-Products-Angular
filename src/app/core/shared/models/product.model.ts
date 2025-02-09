// Class to represent the products
export class product {

    constructor() {
        this.id = -1;
        this.amount = -1;
        this.name = "";
        this.price = -1;
    }

    id: number;
    amount: number;
    name: string;
    price: number;
}

// Interface for data received from the API
export interface product {
    id: number;
    amount: number;
    name: string;
    price: number;
}