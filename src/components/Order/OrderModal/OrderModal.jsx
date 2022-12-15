import Modal from 'react-modal';
import { useContext } from "react";
import { OrderContext } from "../../../context/orders/orderContext";

export const OrderModal = ({ order, isOpen, onRequestClose }) => {
    const { removeOrder } = useContext(OrderContext);
    const handleCancelOrder = () => {
        removeOrder(order.id);
        onRequestClose();
    }

  return <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={order.title}
      className="modal"
      overlayClassName="overlay"
  >
      <div>{order.id}</div>
      <div>{order.client.name}</div>
      <div>{order.client.address}</div>
      {order.resource.map((product) => <div>{product.name}</div>)}
      <button onClick={handleCancelOrder}>Cancel Order</button>
      <button onClick={onRequestClose}>Close</button>
  </Modal>
};