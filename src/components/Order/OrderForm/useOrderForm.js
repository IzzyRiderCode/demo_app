import {useState, useContext, useEffect} from "react";
import {OrderContext} from "../../../context/orders/orderContext";

const initialOrderFormValues = {
    clientName: '',
    clientAddress: '',
    dateFrom: '',
    dateTo: '',
}

export const FormInputs = {
    clientName: 'clientName',
    clientAddress: 'clientAddress',
    dateFrom: 'dateFrom',
    dateTo: 'dateTo',
}

export const useOrderForm = () => {
    const [formValues, setFormValues] = useState(initialOrderFormValues);
    const { setIsCandidateSet, orderCandidateDates } = useContext(OrderContext)

    useEffect(() => {
        if (formValues.dateFrom && formValues.dateTo ) {
            setIsCandidateSet(true);
        }
        else {
            setIsCandidateSet(false)
        }

    }, [formValues, setIsCandidateSet])

    const resetForm = () => {
        setFormValues(initialOrderFormValues);
        setIsCandidateSet(false);
    }

    const updateForm = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        })

        if (name === FormInputs.dateFrom) {
            orderCandidateDates.setFrom(value);
        }

        if (name === FormInputs.dateTo) {
            orderCandidateDates.setTo(value);
        }
    }

    return { ...formValues, resetForm, updateForm };
}