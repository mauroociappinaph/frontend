import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePagination } from "@/hook/usePagination"; // Hook que creaste

export function PaginationDemo({
  totalItems,
  itemsPerPage,
  children,
}: {
  totalItems: number;
  itemsPerPage: number;
  children: (paginatedItems: any[]) => JSX.Element;
}) {
  const {
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    setCurrentPage,
  } = usePagination(totalItems, itemsPerPage);

  // Calcular los elementos paginados
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // Pasamos los elementos correctos a la paginación
  const paginatedItems = [...Array(totalItems)]
    .map((_, index) => index) // Crear un array de índices para representar los productos
    .slice(startIndex, endIndex);

  return (
    <>
      {children(paginatedItems)}

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={goToPreviousPage} />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => setCurrentPage(index + 1)}
                isActive={index + 1 === currentPage}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={goToNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
