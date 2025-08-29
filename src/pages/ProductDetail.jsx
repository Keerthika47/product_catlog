import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded-2xl">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-60 object-cover rounded-md"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 font-semibold">Price: ${product.price}</p>
      <p className="text-green-600">{product.discountPercentage}% OFF</p>
      <p className="mt-1">Stock: {product.stock}</p>
      <p className="text-sm text-gray-500">Brand: {product.brand}</p>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
    </div>
  );
}

export default ProductDetail;
