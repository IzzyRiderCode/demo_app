import { Product } from "./Product";
import { getProduct } from "../../models/product";
import { useContext, useMemo, } from "react";
import {OrderContext} from "../../context/orders/orderContext";
import {getAvailableProducts} from "../../helpers/getAvailableProducts";

export const Products = () => {
    const {isCandidateSet, orders, orderCandidateDates: { from: dateFrom, to: dateTo }} = useContext(OrderContext)
    const products = useMemo(() => {
        return getAvailableProducts({orders, dateFrom, dateTo });
    }, [dateFrom, orders]);


    return <>
        {isCandidateSet && <ul>
            {products.map((currentProduct, index) => {
                const product = getProduct(currentProduct);

                return <li key={`${index}-${currentProduct.id}`} className="productsListItem">
                    <Product {...product} />
                </li>
            })
            }
        </ul> }
    </>
}