import Link from "next/link";
import '../src/app/styles/Nvbar.css'; // Import the custom CSS file

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link href="/">MyStore</Link>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/Shop" className="nav-link">Shop</Link>
          <Link href="/About" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Search Bar and Icons */}
        <div className="icons">
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l5 5m-5-5a7 7 0 1110 0 7 7 0 01-10 0z"
                />
              </svg>
            </button>
          </div>

          {/* Cart Icon */}
         {/* Cart Icon */}
<Link href="/cart" className="icon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 3h2l.4 2m0 0l1.6 8h11.4l1.6-8H5.4m1.6 0L7 10m10 0H5"
    />
  </svg>
  <span className="badge">3</span>
</Link>

{/* User Icon */}
<Link href="/profile" className="icon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4a4 4 0 100 8 4 4 0 000-8zM6.4 18a10 10 0 1111.2 0H6.4z"
    />
  </svg>
</Link>

        </div>
      </div>
    </header>
  );
}
