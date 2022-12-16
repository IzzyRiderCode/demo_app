import { createContext } from "react";

const initialOrders = {
    orders: [],
    addOrders: () => {},
    removeOrder: () => {},
    isCandidateSet: false,
    setIsCandidateSet: () => {},
    orderCandidateDates: {
        from: '',
        setFrom: () => {},
        to: '',
        setTo: () => {},
    }
};

export const OrderContext = createContext(initialOrders);