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

export interface Entrepreneur {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    businessName: string;
    businessDescription?: string;
    products: Product[];
    avatar: string;
}

export interface AppState {
    products: Product[];
    user: User | null;
    loading: boolean;
    error: string | null;
    addProduct: (product: Product) => void;
    removeProduct: (productId: string) => void;
    setUser: (user: User) => void;
    clearUser: () => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

export interface User {
    id: string;
    name: string;
    email: string;
}