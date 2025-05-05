// components/SidebarFilter.js
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

export default function SidebarFilter({ filters, setFilters }) {
  const [categoryOpen, setCategoryOpen] = useState(true);

  const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];

  const handleCategoryClick = (category) => {
    if (filters.category === category) {
      setFilters({ ...filters, category: null }); // toggle off
    } else {
      setFilters({ ...filters, category });
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border space-y-4">
      {/* CATEGORY FILTER */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          <h3 className="font-semibold text-gray-800">Category</h3>
          {categoryOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          )}
        </div>

        {categoryOpen && (
          <ul className="mt-3 space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`text-sm px-2 py-1 rounded cursor-pointer ${
                  filters.category === category
                    ? "bg-gray-200 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Future filters like Price, Ratings can be added here */}
    </div>
  );
}
