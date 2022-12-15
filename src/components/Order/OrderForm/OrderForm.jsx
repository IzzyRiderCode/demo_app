import { useContext } from "react";
import { OrderContext } from "../../../context/orders/orderContext";
import { ProductsContext } from "../../../context/products/productsContext";
import { getId } from "../../../helpers/getId";
import { FormInputs, useOrderForm } from "./useOrderForm";

export const OrderForm = () => {
    const { addOrders } = useContext(OrderContext);
    const { selectedProducts, unselectAll } = useContext(ProductsContext);
    const { clientAddress, clientName, dateFrom, dateTo, resetForm, updateForm } = useOrderForm();

    const handleAddOrder = () => {
        addOrders({
            id: getId(),
            client: {
                name: clientName,
                address: clientAddress,
            },
            date: {
                from: dateFrom,
                to: dateTo,
            },
            products: selectedProducts,
        });
        unselectAll();
        resetForm();
    }

    return <>
        <input value={clientName} onChange={({ target: { value } }) => updateForm(FormInputs.clientName, value)} type="text"/>
        <input value={clientAddress} onChange={({ target: { value } }) => updateForm(FormInputs.clientAddress, value)} type="text"/>
        <input value={dateFrom} onChange={({ target: { value } }) => updateForm(FormInputs.dateFrom, value)} type="date"/>
        <input value={dateTo} onChange={({ target: { value } }) => updateForm(FormInputs.dateTo, value)} type="date"/>
        <button onClick={handleAddOrder}>
            Add order
        </button>
    </>
}