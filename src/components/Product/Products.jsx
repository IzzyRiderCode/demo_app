import { availableProducts } from "../../models/data";
import { Product } from "./Product";
import { getProduct } from "../../models/product";
import {useCallback, useContext, useMemo} from "react";
import {OrderContext} from "../../context/orders/orderContext";
import {useOrderForm} from "../Order/OrderForm/useOrderForm";
import {getAvailableProducts} from "../../helpers/getAvailableProducts";

export const Products = () => {
    const {isCandidateSet, orders} = useContext(OrderContext)
    const {dateFrom, } = useOrderForm()
    const products = useMemo(()=> {
        return getAvailableProducts({orders, dateFrom})
    },[dateFrom, orders])

    return     <>

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