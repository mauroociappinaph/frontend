import { create } from 'zustand';
import { Entrepreneur, AppState } from '../types/types';  // Importar Entrepreneur en lugar de User

export const useStore = create<AppState>((set) => ({
    products: [],
    entrepreneur: null as Entrepreneur | null,  // Definir el estado del usuario como Entrepreneur
    loading: false,
    error: null,
    addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
    removeProduct: (productId) => set((state) => ({
        products: state.products.filter((product) => product.id !== productId)
    })),
    setUser: (entrepreneur: Entrepreneur) => set(() => ({ entrepreneur })),  // Establecer el estado como Entrepreneur
    clearUser: () => set(() => ({ entrepreneur: null })),  // Limpiar el estado del usuario
    setLoading: (loading) => set(() => ({ loading })),
    setError: (error) => set(() => ({ error })),
}));