const ProductItem = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center product-item">
      <img src={product.thumbnail} alt={product.title} className="w-full rounded-md" />
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;