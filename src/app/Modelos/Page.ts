// Definición del modelo de datos para la página
export interface Page<T> {
  content: T[];          // Lista de elementos en la página
  totalPages: number;     // Número total de páginas disponibles
  totalElements: number;  // Número total de elementos en todas las páginas
  last: boolean;          // Indica si esta es la última página
  size: number;           // Tamaño de la página (número de elementos por página)
  number: number;         // Número de la página actual
  sort: any;              // Información sobre la ordenación (si se aplica)
  numberOfElements: number;  // Número de elementos en la página actual
  first: boolean;         // Indica si esta es la primera página
  empty: boolean;         // Indica si la página está vacía
}
