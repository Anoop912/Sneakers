import React from "react";

const Card = ({ img, title, manufacturer, price, oldPrice, rating, discount }) => {
  return (
    <div className="p-4 cursor-pointer group">
      
      {/* IMAGE WRAPPER */}
      <div className="relative bg-gray-100 p-6 rounded-md">
        
        {/* Discount Badge */}
        {discount && (
          <span className="absolute left-30 bottom-38 bg-blue-500 text-white text-xs px-2 py-1 rounded">
            -{discount}%
          </span>
        )}

        {/* Product Image */}
        <img
  src={img}
  alt={title}
  className="w-full h-40 object-contain mix-blend-multiply group-hover:scale-105 transition"
/>
      </div>

      {/* RATING */}
      <div className="flex gap-1 text-yellow-400 text-sm mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>

      {/* TITLE */}
      <h3 className="font-semibold mt-2 text-gray-900">{title}</h3>

      {/* MANUFACTURER */}
      <p className="text-sm text-gray-500">{manufacturer}</p>

      {/* PRICE */}
      <div className="flex items-center gap-3 mt-1">
        <span className="font-bold text-gray-900">${price}</span>

        {oldPrice && (
          <span className="text-gray-400 line-through text-sm">
            ${oldPrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
