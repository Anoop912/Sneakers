import React, { useState } from "react";
import Card from "./Card";

function MainShoeSection() {
  const products = [
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 210, oldPrice: 300, rating: 4, discount: 10 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 210, oldPrice: 300, rating: 4 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 310, oldPrice: 300, rating: 4, discount: 20 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 410, oldPrice: 300, rating: 4 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 110, oldPrice: 300, rating: 4, discount: 10 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 310, oldPrice: 300, rating: 4 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 210, oldPrice: 300, rating: 4, discount: 30 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 210, oldPrice: 300, rating: 4 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 210, oldPrice: 300, rating: 4, discount: 10 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 210, oldPrice: 300, rating: 4, discount: 10 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 210, oldPrice: 300, rating: 4 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 210, oldPrice: 300, rating: 4, discount: 50 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 210, oldPrice: 300, rating: 4, discount: 50 },
    { img: '/product/1.jpg', title: 'Nike react hyperDunk', price: 210, oldPrice: 300, rating: 4, discount: 50 },
  ];

  const itemsPerPage = 12;
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <>
      <div className='m-4 p-2 font-bold text-gray-700'>
        FOR MENS
      </div>

      <div className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-2 p-4 m-4 border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <span className="w-4 h-4 bg-black"></span>
              <span className="w-4 h-4 border border-black"></span>
            </div>
            <p className="text-gray-600 text-sm">There Are {products.length} Products.</p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Sort By:</span>
            <select className="border px-3 py-1 rounded text-gray-700">
              <option>Relevance</option>
              <option>Price (Low → High)</option>
              <option>Price (High → Low)</option>
            </select>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleProducts.map((item, index) => (
            <div className="cursor-pointer" key={index}>
              <Card {...item} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-10 text-sm text-gray-600 px-4">
          <p>
            Showing {startIndex + 1}–
            {Math.min(startIndex + itemsPerPage, products.length)} of {products.length} item(s)
          </p>

          <div className="flex gap-4 items-center">
            <button
              className="hover:text-black disabled:opacity-40"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              &lt; Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => (
              <span
                key={i}
                onClick={() => setPage(i + 1)}
                className={`cursor-pointer px-2 ${
                  page === i + 1 ? "font-bold text-black" : "hover:text-black"
                }`}
              >
                {i + 1}
              </span>
            ))}

            <button
              className="hover:text-black disabled:opacity-40"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainShoeSection;
