import { useState } from "react";

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

    const resetForm = () => {
        setFormValues(initialOrderFormValues);
    }

    const updateForm = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    return { ...formValues, resetForm, updateForm };
}