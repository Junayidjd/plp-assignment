import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MobileFilter({
  mobileFiltersOpen = false,
  setMobileFiltersOpen,
  filters = {},
  setFilters,
}) {
  const categories = ["men's clothing", "women's clothing", "electronics", "jewelery"];

  return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={setMobileFiltersOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 flex z-40">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="ml-auto relative w-full max-w-xs h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
              {/* Header */}
              <div className="px-4 flex items-center justify-between border-b pb-3">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Close filters</span>
                  ✕
                </button>
              </div>

              {/* Category Filter */}
              <div className="mt-4 px-4">
                <h3 className="text-md font-semibold text-gray-900 mb-2">
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className={`text-sm px-3 py-1.5 rounded-full cursor-pointer border ${
                        filters?.category === category
                          ? "bg-black text-white border-black"
                          : "text-gray-600 border-gray-300 hover:bg-gray-100"
                      }`}
                      onClick={() =>
                        setFilters((prev) => ({ ...prev, category }))
                      }
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
