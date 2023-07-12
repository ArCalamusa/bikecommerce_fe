import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import MainLayout from "../layout/MainLayout";
import { cartProducts } from "../redux/bikeSlice";

const Cart = () => {
  const productData = useSelector(cartProducts);
  const userInfo = useSelector((state) => state.bike.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price
    })
    setTotalAmt(price);
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true)
    } else {
      toast.error("Accedi per effettuare il checkout")
    }
  }

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token
    })
  }

  return (
    <MainLayout>
      <img
        className='w-full h-80 object-cover'
        src='https://www.cicliviviani.com/public/page/backgrounds/banner-caschi-luglio-000.png'
        alt='cartImg'
      />
      <div className='max-w-6xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2x1 font-medium'>totale carrello</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotale{" "}
              <span className='font-titleFont font-bold text-lg'> €{totalAmt}
              </span>
            </p>
            <p className='flex items-center gap-4 text-base'>
              Spese di spedizione{" "}
              <span> Gratuite per ordini superiori all'importo di € 50
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            Totale <span className='text-xl font-bold'>€{totalAmt}</span>
          </p>
          <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
            Procedi all'ordine</button>
          {
            payNow && (
              <div className='w-full mt-6 flex items-center justify-center' >
                <StripeCheckout
                  stripeKey='pk_test_51NOM97IkIKa6VAD8QF48NK0cB3VhASs7xWvbilVcMGB255QYgfmUZTvZMll55MHwrvJjCKwc8h7F6lPZZ5y8oCPU00L2GtTtD2'
                  name='epicBike'
                  amount={totalAmt * 100}
                  label='Pay to epicBike'
                  description={`Il totale è €${totalAmt}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            )
          }
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;