import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  urlName: string;
}

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { urlName } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (urlName) {
      fetch("/api/products")
        .then((response) => response.json())
        .then((data: Product[]) => {
          const foundProduct = data.find((p) => p.urlName === urlName);
          setProduct(foundProduct || null);
        });
    }
  }, [urlName]);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Navbar />
      <div className="container">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
        />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductPage;
