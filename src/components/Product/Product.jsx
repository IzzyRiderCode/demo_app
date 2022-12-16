import { Avatar } from "./Avatar/Avatar";
import { useContext } from "react";
import { ProductsContext } from "../../context/products/productsContext";
import classNames from "classnames";
import {OrderContext} from "../../context/orders/orderContext";

export const Product = ({ name, id, image }) => {
    const { selectedProducts, selectProduct, unselectProduct } = useContext(ProductsContext);
    const isSelected = selectedProducts.some(({ id: currentId }) => currentId === id);


    const toggleProduct = (product) => {
        if (isSelected) {
            unselectProduct(product.id);
        } else {
            selectProduct(product);
        }
    }

    return <button onClick={() => toggleProduct({ name, id })} className={classNames('product', { ['selected']: isSelected })}>
        <Avatar name={name} src={image} />
        <div>{name}</div>
    </button>;
}
