// pages/index.js
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DesktopFilter from "@/components/DesktopFilter";
import MobileFilter from "@/components/MobileFilter";
import ProductCard from "@/components/ProductCard";
import FilterControls from "@/components/FilterControls";

// Server-side fetch
export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return { props: { initialProducts: data } };
}

export default function Home({ initialProducts }) {
  const [filters, setFilters] = useState({});
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [sortOption, setSortOption] = useState("Recommended"); // ✅ new

  // Filtering logic
  useEffect(() => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    // ✅ Sorting logic
    switch (sortOption) {
      case "Price: Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Newest First":
        filtered.sort((a, b) => b.id - a.id); // assuming id as creation order
        break;
      case "Popular":
        filtered.sort((a, b) => b.rating?.count - a.rating?.count);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [filters, products, sortOption]);

  return (
    <>
      <Head>
        <title>Product Listing Page</title>
      </Head>

      <Navbar />

      <main className="min-h-screen px-4 md:px-16 py-6">
        <FilterControls
          filters={filters}
          setFilters={setFilters}
          setIsMobileFilterOpen={setIsMobileFilterOpen}
        />

        {/* Top bar: items count, filter toggle (left) and sort dropdown (right) */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-700">
            <span>{filteredProducts.length} ITEMS</span>
            <button
              onClick={() => setIsFilterVisible(!isFilterVisible)}
              className="underline font-medium text-gray-600"
            >
              {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative inline-block text-left">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="text-sm text-gray-800 font-medium border border-gray-300 rounded px-4 py-2 bg-white shadow-sm focus:outline-none"
            >
              <option>Recommended</option>
              <option>Newest First</option>
              <option>Popular</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar (Desktop Filter) */}
          {isFilterVisible && (
            <aside className="hidden lg:block w-64">
              <DesktopFilter filters={filters} setFilters={setFilters} />
            </aside>
          )}

          {/* Mobile Filter */}
          <MobileFilter
            isOpen={isMobileFilterOpen}
            setIsOpen={setIsMobileFilterOpen}
          >
            <DesktopFilter filters={filters} setFilters={setFilters} />
          </MobileFilter>

          {/* Product Grid */}
          <section
            className={`
              ${isFilterVisible ? "flex-1" : "w-full"}
              grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4
            `}
          >
            {filteredProducts.length === 0 ? (
              <p className="col-span-full text-center text-gray-500">
                No products found.
              </p>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
