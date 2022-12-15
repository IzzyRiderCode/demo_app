import { parseOrderDate } from "./parseOrderDate";

export const getCalendarEventsFromOrders = (orders) => {
    return orders.map(({ id, client: { name, address }, date: { from, to }, products }) => ({
        id,
        start: parseOrderDate(from),
        end: parseOrderDate(to),
        title: name,
        client: { name, address },
        resource: products
    }));
}
