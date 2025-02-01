import Link from "next/link";
import '../src/app/styles/Footer.css'; // Import the custom CSS file for styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Logo */}
        <div className="footer-logo">
          <Link href="/" className="footer-logo-link">MyStore</Link>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <Link href="/about" className="footer-nav-link">About Us</Link>
          <Link href="/contact" className="footer-nav-link">Contact</Link>
          <Link href="/privacy-policy" className="footer-nav-link">Privacy Policy</Link>
          <Link href="/terms" className="footer-nav-link">Terms of Service</Link>
        </nav>

        {/* Social Media Links */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Footer Copyright */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
