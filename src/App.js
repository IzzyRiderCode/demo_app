import './App.css';
import { Products } from "./components/Product/Products";
import { OrderForm } from "./components/Order/OrderForm/OrderForm";
import { ProductsContext } from "./context/products/productsContext";
import { OrderContext } from "./context/orders/orderContext";
import { useProductsContext } from "./context/products/useProductsContext";
import { useOrdersContext } from "./context/orders/useOrdersContext";
import { OrderBookingCalendar } from "./components/Order/OrderBookingCalendar/OrderBookingCalendar";
import {Header} from "./components/Header/Header";

function App() {
    const initialProductsState = useProductsContext();
    const initialOrdersState = useOrdersContext();

  return (
      <OrderContext.Provider value={initialOrdersState}>
         <ProductsContext.Provider value={initialProductsState}>
             <Header />
            <OrderBookingCalendar />
            <Products />
            <OrderForm />
        </ProductsContext.Provider>
      </OrderContext.Provider>
  );
}

export default App;
