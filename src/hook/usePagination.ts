import { useState } from 'react';

export function usePagination(initialTotalItems: number, itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(initialTotalItems);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const goToNextPage = () => {
        setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    return {
        currentPage,
        totalPages,
        goToNextPage,
        goToPreviousPage,
        setCurrentPage,
        setTotalItems, // Añadimos esta función para actualizar el número total de ítems
    };
}