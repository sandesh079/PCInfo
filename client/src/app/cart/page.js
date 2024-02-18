"use client"
import HomeLayout from '@/layout/HomeLayout'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
    const cartItems = [
        { id: 1, name: 'Blue T-Shirt', price: 20, quantity: 2 },
        { id: 2, name: 'Red Shoes', price: 50, quantity: 1 },
        { id: 3, name: 'Yellow Hat', price: 15, quantity: 3 }
      ];
    
      // Calculate total price
      const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    

  return (
    <HomeLayout>
        <div className="bg-lightblue p-6 rounded-lg shadow-md">
      <h2 className="text-blue-600 text-center text-2xl mb-4">Your Cart</h2>
      <ul className="list-none p-0">
        {cartItems.map(item => (
          <li key={item.id} className="bg-white rounded-lg shadow-sm mb-2 p-3">
            <span>{item.name} - ${item.price} x {item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-center">
        <h3 className="text-blue-600">Total: ${totalPrice}</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">Checkout</button>
      </div>
    </div>
    </HomeLayout>
  )
}

export default page