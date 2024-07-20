// src/services/orderItemService.tsx
import axios from 'axios';

const API_URL = 'http://localhost:3000/order-items'; // Replace with your actual API URL

export const fetchOrderItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching order items:', error);
    throw error;
  }
};

export const updateOrderItemQuantity = async (id: number, quantity: number) => {
  try {
    const response = await axios.put(`${API_URL}/${id}/quantity`, { quantity });
    return response.data;
  } catch (error) {
    console.error('Error updating order item quantity:', error);
    throw error;
  }
};

export const deleteOrderItem = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting order item:', error);
    throw error;
  }
};
