// 'use client';

// import React from 'react';
// import { useCart } from '@/hooks/useCarts';

// const Cart = () => {
//   const { cartItems, decreaseQuantity } = useCart();

//   const total = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div style={{ border: '2px solid #333', padding: 20, margin: 20 }}>
//       <h3>Tu Carrito ({cartItems.length} items únicos)</h3>

//       {cartItems.length === 0 ? (
//         <p>El carrito está vacío.</p>
//       ) : (
//         <>
//           {cartItems.map(item => (
//             <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <span>
//                 {item.title} ({item.quantity}) - ${item.price.toFixed(2)} c/u
//               </span>
//               <button onClick={() => decreaseQuantity(item.id)}>-</button>
//             </div>
//           ))}

//           <h4>Total a pagar: ${total.toFixed(2)}</h4>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
