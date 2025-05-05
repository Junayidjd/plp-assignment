"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaHeart, FaShoppingBag, FaUser, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="w-full">
      {/* Top Black Strip */}
      <div className="bg-black text-white text-sm flex justify-center gap-10 px-4 py-2">
        <span className="flex items-center gap-2">
          <span className="text-pink-500">■</span>Free Shipping
        </span>
        <span className="flex items-center gap-2">
          <span className="text-pink-500">■</span>10% Off on First Order
        </span>
      </div>

      {/* Main Navbar */}
      <div className="bg-white px-8 md:px-16 py-6 flex items-center justify-between border-b border-gray-200">
        <div className="text-3xl font-bold">SHOPPING</div>

        <div className="flex items-center gap-4">
          {session ? (
            <>
              <div className="bg-yellow-400 px-2 py-1 text-sm">
                {session.user?.name}
              </div>
              <button
                onClick={() => signOut()}
                className="text-sm text-gray-700 underline"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              className="text-sm text-gray-700 underline"
            >
              Sign In
            </button>
          )}

          <div className="flex gap-3 text-lg">
            <FaSearch className="cursor-pointer" />
            <FaHeart className="cursor-pointer" />
            <FaShoppingBag className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-white px-4 md:px-16 py-4 flex justify-center gap-6 md:gap-16 font-medium text-sm">
        <a href="#" className="hover:text-gray-600">
          SHOP
        </a>
        <a href="#" className="hover:text-gray-600">
          MEN
        </a>
        <a href="#" className="hover:text-gray-600">
          WOMEN
        </a>
        <a href="#" className="hover:text-gray-600">
          KIDS
        </a>
      </div>
    </div>
  );
}
