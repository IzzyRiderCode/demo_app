import { createContext } from "react";

const initialOrders = {
    orders: [],
    addOrders: () => {},
    removeOrder: () => {},
};

export const OrderContext = createContext(initialOrders);