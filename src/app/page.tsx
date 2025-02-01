import Image from "next/image";
import './styles/Home.css'; // Import the custom CSS file

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to MyStore</h2>
          <p className="hero-description">
        Discover the best products at unbeatable prices. Shop now and enjoy exclusive offers!
          </p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <Image 
        src="/images/homeimage.jpg" 
        alt="Hero Background" 
            height={600}
            width={1300}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="feature-item">
            <h3 className="feature-title">Fast Shipping</h3>
            <p>Get your orders delivered to your doorstep in no time.</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Quality Products</h3>
            <p>We offer top-quality products from trusted brands.</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Customer Support</h3>
            <p>Our support team is here to help you 24/7.</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="featured-products-container">
          <div className="product-card">
            <Image 
            src="/images/homeimage.jpg" 
              alt="Product 1" 
              width={400} 
              height={400} 
              objectFit="cover" 
              className="product-image" 
            />
            <h3 className="product-title">Product 1</h3>
            <p className="product-price">$29.99</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-card">
            <Image 
              src="/images/homeimage.jpg" 
              alt="Product 2" 
              width={400} 
              height={400} 
              objectFit="cover" 
              className="product-image" 
            />
            <h3 className="product-title">Product 2</h3>
            <p className="product-price">$49.99</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-card">
            <Image 
              src="/images/homeimage.jpg" 
              alt="Product 3" 
              width={400} 
              height={400} 
              objectFit="cover" 
              className="product-image" 
            />
            <h3 className="product-title">Product 3</h3>
            <p className="product-price">$19.99</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p className="testimonial-text">
              Amazing quality products and fast delivery. Highly recommend!
            </p>
            <p className="testimonial-author">- John Doe</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              The best online store! Great prices and excellent customer service.
            </p>
            <p className="testimonial-author">- Jane Smith</p>
          </div>
        </div>
      </section>
    </div>
  );
}
