import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="border p-3 rounded shadow-sm hover:shadow-md transition-all cursor-pointer">
      <div className="aspect-square bg-gray-100 mb-3 relative overflow-hidden">
        <Image 
          src={product.image}
          alt={product.title}
          fill
          className="object-contain hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="font-medium truncate">{product.title}</h3>
      <p className="text-gray-600 mt-1">${product.price}</p>
      <button className="mt-2 w-full bg-black text-white py-1 rounded text-sm">
        Add to Cart
      </button>
    </div>
  );
}