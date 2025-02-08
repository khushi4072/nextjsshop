"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/Products/${id}`)
      .then((res) => {
        setProduct(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Dynamically load Razorpay script
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);  // Cleanup on component unmount
    };
  }, [id]);

  const handlePayment = async () => {
    try {
      // Call backend to create Razorpay order
      const orderData = await axios.post('/api/razorpay/Createorder', { amount: product.price });

      // Configure Razorpay options
      const options = {
        key: "rzp_test_OmCfFJhnp3Fztn", // Razorpay Key ID
        amount: orderData.data.amount, // Amount in paise
        currency: "INR",
        name: product.name,
        description: product.description,
        order_id: orderData.data.orderId, // Order ID from backend
        handler: async function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
      
          // Send this data to backend for verification
          const verifyResponse = await fetch("/api/razorpay/Verifypayment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            }),
          });
      
          const verifyData = await verifyResponse.json();
      
          if (verifyData.success) {
            alert("Payment Successful! Payment ID: " + razorpay_payment_id);
          } else {
            alert("Payment Verification Failed!");
          }
        },
        prefill: {
          name: "Your Name",
          email: "user@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#2ecc71",
        },
      };
      
      // Create Razorpay instance
      
      

      // Open Razorpay payment popup
      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error( error);
      alert("Error while initiating payment. Please try again.");
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!product) return <h1 className="not-found">Product Not Found</h1>;

  return (
    <div className="product-page">
      <div className="product-card">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button className="buy-button" onClick={handlePayment}>Buy Now</button>
      </div>
    </div>
  );
}
