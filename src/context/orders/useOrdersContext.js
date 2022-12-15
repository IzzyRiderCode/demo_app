import { useLocalStorage } from "react-use";

export const useOrdersContext = () => {
    const [orders, setOrders] = useLocalStorage('orders', []);

    const addOrders = (order) => {
        setOrders([...orders, order]);
    };

    const removeOrder = (orderId) => {
        const filteredOrders = orders.filter(({ id }) => id !== orderId);
        setOrders(filteredOrders);
    };

    return { orders, addOrders, removeOrder };
}