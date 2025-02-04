'use client'
import '../styles/Shop.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Shop() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  async function getProductData() {
    const response = await fetch('/api/Products');
    const data = await response.json();
    setProductsData(data);
  }

  // Function to handle image error for a specific product
  const handleImageError = (index) => {
    setProductsData((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, image: '/images/homeimage.jpg' } : product
      )
    );
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">SHOP</h1>
        <p className="description">
          Welcome to our online store! Explore our amazing products.
        </p>
      </header>

      <section className="products-section">
        <h2 className="section-title">Our Products</h2>
        <div className="products-list">
          {productsData.map((product, index) => (
            <div key={product._id} className="product-card">
              <div className="image-container">
                <Link href={`/Shop/${product._id}`}>
                <Image
                  src={product.image} // Use product's own image
                  alt={product.name}
                  width={200}
                  height={200}
                  className="product-image"
                  onError={() => handleImageError(index)} // Set default image on error
                />
                </Link>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>Category:</strong> {product.category}s
              </p>
              <p>
                <strong>Stock:</strong>{' '}
                {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
              </p>
              <button className="btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" name="name" className="input" />
          <label>Email:</label>
          <input type="email" name="email" className="input" />
          <label>Message:</label>
          <textarea name="message" className="textarea"></textarea>
          <button type="submit" className="btn submit-btn">Send</button>
        </form>
      </section>
    </div>
  );
}
