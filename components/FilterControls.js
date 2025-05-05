"use client";
import { useState } from "react";
import SidebarFilter from "./SidebarFilter";
import MobileFilter from "./MobileFilter";

export default function FilterControls({ filters, setFilters }) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">PRODUCTS</h1>
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="md:hidden border px-4 py-2 text-sm"
        >
          Filters
        </button>
      </div>

      <MobileFilter
        isOpen={isMobileFilterOpen}
        setIsOpen={setIsMobileFilterOpen}
      >
        <SidebarFilter filters={filters} setFilters={setFilters} />
      </MobileFilter>
    </>
  );
}
