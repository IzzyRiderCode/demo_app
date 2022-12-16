import { createContext } from "react";

const initialOrders = {
    orders: [],
    addOrders: () => {},
    removeOrder: () => {},
    isCandidateSet: false,
    setIsCandidateSet: () => {},
};

export const OrderContext = createContext(initialOrders);