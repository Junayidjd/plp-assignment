"use client";
import { useState } from "react";
import SidebarFilter from "./SidebarFilter";
import MobileFilter from "./MobileFilter";
import ProductCard from "./ProductCard";

export default function ProductListPage() {
  const [filters, setFilters] = useState({ category: "", material: "" });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">DISCOVER OUR PRODUCTS</h1>
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="md:hidden border px-4 py-2"
        >
          Filter
        </button>
      </div>

      <div className="flex">
        {/* Desktop Filter */}
        <div className="hidden md:block">
          <SidebarFilter filters={filters} setFilters={setFilters} />
        </div>

        {/* Product List */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Replace with real filtered data */}
          {[...Array(8)].map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>

      {/* Mobile Filter */}
      <MobileFilter
        isOpen={isMobileFilterOpen}
        setIsOpen={setIsMobileFilterOpen}
      >
        <SidebarFilter filters={filters} setFilters={setFilters} />
      </MobileFilter>
    </div>
  );
}
