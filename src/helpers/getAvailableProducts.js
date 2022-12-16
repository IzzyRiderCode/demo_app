import {availableProducts} from "../models/data";

export const getAvailableProducts = ({orders, dateFrom,}) => {
    let unAvailebleProducts = [];

    orders.forEach((order)=> {
        if (new Date(order.date.from) >= new Date(dateFrom)){
            unAvailebleProducts.push(order.products)
        }
    })

    return availableProducts.filter(({id})=>{
        return unAvailebleProducts.some((unAvailebleProduct)=> {
            return unAvailebleProduct === id
        })
    })
}