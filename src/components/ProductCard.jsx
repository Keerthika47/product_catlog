import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.brand}</p>
      <p className="text-gray-700 mt-1">${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;
