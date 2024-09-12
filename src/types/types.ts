interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface Entrepreneur {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    businessName: string;
    businessDescription?: string;
    products: Product[];
}