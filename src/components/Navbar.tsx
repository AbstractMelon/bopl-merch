import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Bopl Merch!</h1>
        <nav className="page-header-navbar">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
