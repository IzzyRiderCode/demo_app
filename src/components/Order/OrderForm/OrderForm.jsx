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
        <div> <span className={'selectOrder'} > Select Order Dates</span></div>
        <div className={'forms'}>
        <div> Imię  <input className={'form'} value={clientName} onChange={({ target: { value } }) => updateForm(FormInputs.clientName, value)} type="text"/> </div>
        <div> Adres wysyłki <input className={'form'} value={clientAddress} onChange={({ target: { value } }) => updateForm(FormInputs.clientAddress, value)} type="text"/> </div>
        <div> Od:<input className={'form'} value={dateFrom} onChange={({ target: { value } }) => updateForm(FormInputs.dateFrom, value)} type="date"/> </div>
        <div> Do: <input className={'form'} value={dateTo} onChange={({ target: { value } }) => updateForm(FormInputs.dateTo, value)} type="date"/> </div>
        <button className={'button'} onClick={handleAddOrder}>
            ZAMÓW
        </button>
       </div>
    </>
}