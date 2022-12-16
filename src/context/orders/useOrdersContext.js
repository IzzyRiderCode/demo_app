import { useLocalStorage } from "react-use";
import {useState} from "react";

export const useOrdersContext = () => {
    const [orders, setOrders] = useLocalStorage('orders', []);
    const [isCandidateSet, setIsCandidateSet] = useState(false)
    const [orderCandidateFrom, setOrderCandidateFrom] = useState('');
    const [orderCandidateTo, setOrderCandidateTo] = useState('');

    const addOrders = (order) => {
        setOrders([...orders, order]);
    };

    const removeOrder = (orderId) => {
        const filteredOrders = orders.filter(({ id }) => id !== orderId);
        setOrders(filteredOrders);
    };

    return { orders, addOrders, removeOrder, isCandidateSet, setIsCandidateSet, orderCandidateDates: { from: orderCandidateFrom, to: orderCandidateTo, setFrom: setOrderCandidateFrom, setTo: setOrderCandidateTo }};
}