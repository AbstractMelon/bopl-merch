import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { Result } from "postcss";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  urlName: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="grid-container">
          {products.map((product) => (
            <Link
              href={`/products/${product.urlName}`}
              key={product.id}
              className="page-link"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={250}
                height={250}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
