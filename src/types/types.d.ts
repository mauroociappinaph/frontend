// Definición de tipos y interfaces para productos, emprendedores, y estado de la aplicación

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface ProductEnterpreunerID {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    entrepreneursId: string;
}

export interface EntrepreneurId {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    businessName: string;
    businessDescription?: string;
    products: Product[];
    currentPage: number;
}

// Definición de Entrepreneur y AppState
export interface Entrepreneur {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    businessName: string;
    businessDescription?: string;
    products: Product[];
    avatar?: string; // Avatar opcional
}

export interface AppState {
    products: Product[];
    entrepreneur: Entrepreneur | null; // Cambiar 'user' por 'entrepreneur'
    loading: boolean;
    error: string | null;
    addProduct: (product: Product) => void;
    removeProduct: (productId: string) => void;
    setUser: (entrepreneur: Entrepreneur) => void; // Cambiar 'user' por 'entrepreneur'
    clearUser: () => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

export interface User {
    id: string;
    name: string;
    email: string;

}