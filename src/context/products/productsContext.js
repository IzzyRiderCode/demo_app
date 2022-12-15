import { createContext } from "react";

export const initialProducts = {
    selectedProducts: [],
    selectProduct: () => {},
    unselectProduct: () => {},
    unselectAll: () => {},
};

export const ProductsContext = createContext(initialProducts);
