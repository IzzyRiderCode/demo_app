import {availableProducts} from "../models/data";

export const getAvailableProducts = ({orders, dateFrom, dateTo}) => {
    if (!orders.length) {
        return availableProducts;
    }

    let unAvailebleProducts = [];

    orders.forEach((order)=> {
        if (new Date(order.date.from) <= new Date(dateFrom) && new Date(order.date.to) >= new Date(dateFrom)){
            unAvailebleProducts = [...unAvailebleProducts, ...order.products.map((prod) => prod.id)];
        }
    })

    return availableProducts.filter(({id}) => {
        return !unAvailebleProducts.includes(id);
    });
}