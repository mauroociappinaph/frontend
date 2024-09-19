import { create } from 'zustand'
import { AppState } from '../types/types'

export const useStore = create<AppState>((set) => ({
    products: [],
    user: null,
    loading: false,
    error: null,
    addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
    removeProduct: (productId) => set((state) => ({
        products: state.products.filter((product) => product.id !== productId)
    })),
    setUser: (user) => set(() => ({ user })), clearUser: () => set(() => ({ user: null })),
    setLoading: (loading) => set(() => ({ loading })),
    setError: (error) => set(() => ({ error })),
}));