import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Bopl Merch!</h1>
        <nav className="page-header-navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
