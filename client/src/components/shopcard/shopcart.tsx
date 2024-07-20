// src/components/shopcart/shopcart.tsx
import React, { useEffect, useState } from 'react';
import { fetchOrderItems, updateOrderItemQuantity,deleteOrderItem } from '../../service/orderItemService'; // Assuming you have an update function in the service
import './shopcart.scss';

interface OrderItem {
  order_item_id: number;
  order: { id: number };
  product: { id: number; name: string };
  quantity: number;
  unit_price: number;
  created_at: string;
  updated_at: string;
}

const ShopCart: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    const getOrderItems = async () => {
      try {
        const data = await fetchOrderItems();
        setOrderItems(data);
      } catch (error) {
        console.error('Error fetching order items:', error);
      }
    };

    getOrderItems();
  }, []);
  const handleDelete = async (id: number) => {
    try {
      await deleteOrderItem(id);
      setOrderItems(orderItems.filter(item => item.order_item_id !== id));
    } catch (error) {
      console.error('Error deleting order item:', error);
    }
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setOrderItems(prevItems =>
      prevItems.map(item =>
        item.order_item_id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleUpdateQuantity = async (id: number, newQuantity: number) => {
    try {
      await updateOrderItemQuantity(id, newQuantity);
      // Optionally refetch order items or handle success notification
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <div className="shopcart">
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map(item => (
            <tr key={item.order_item_id}>
              <td>{item.order.id}</td>
              <td>{item.product.name}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={e => handleQuantityChange(item.order_item_id, parseInt(e.target.value))}
                  onBlur={e => handleUpdateQuantity(item.order_item_id, parseInt(e.target.value))}
                />
              </td>
              <td>{item.unit_price}</td>
              <td>{(item.quantity * item.unit_price).toFixed(2)}</td>
              <td>{new Date(item.created_at).toLocaleString()}</td>
              <td>{new Date(item.updated_at).toLocaleString()}</td>
              <td>
                <button onClick={() => handleUpdateQuantity(item.order_item_id, item.quantity)}>Update</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.order_item_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Order</button>
    </div>
  );
};

export default ShopCart;
