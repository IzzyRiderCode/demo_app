import { useState } from "react";

export const useProductsContext = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const selectProduct = (product) => {
        setSelectedProducts([...selectedProducts, product]);
    };
    const unselectProduct = (productId) => {
        const filteredProducts = selectedProducts.filter(({ id: currentId }) => currentId !== productId);

        setSelectedProducts(filteredProducts);
    };
    const unselectAll = () => {
        setSelectedProducts([]);
    }

    return { selectedProducts, selectProduct, unselectProduct, unselectAll };
}