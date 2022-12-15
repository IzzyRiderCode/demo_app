import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useContext, useState } from "react";
import { OrderContext } from "../../../context/orders/orderContext";
import { getCalendarEventsFromOrders } from "../../../helpers/getCalendarEventsFromOrders";
import { OrderModal } from "../OrderModal/OrderModal";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localize = momentLocalizer(moment);

export const OrderBookingCalendar = () => {
    const { orders } = useContext(OrderContext);
    const events = getCalendarEventsFromOrders(orders);
    const [orderDetailsModalOpen, setOrderDetailsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState();

    const closeModal = () => {
        setOrderDetailsModalOpen(false);
    }

    const handleSelectEvent = (order) => {
        setSelectedOrder(order);
        setOrderDetailsModalOpen(true);
    }

    return <>
        <Calendar
            localizer={localize}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 300 }}
            onSelectEvent={handleSelectEvent}
        />
        {selectedOrder && <OrderModal order={selectedOrder} isOpen={orderDetailsModalOpen} onRequestClose={closeModal} />}
    </>
}