import { availableProducts } from "../../models/data";
import { Product } from "./Product";
import { getProduct } from "../../models/product";

export const Products = () => {
    return <ul>
            {availableProducts.map((currentProduct, index) => {
                const product = getProduct(currentProduct);

                return <li key={`${index}-${currentProduct.id}`} className="productsListItem">
                    <Product {...product} />
                </li>
            })
        }
    </ul>
}