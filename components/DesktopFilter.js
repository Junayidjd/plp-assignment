import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const filterSections = [
  {
    id: "customizable",
    name: "Customizable",
    type: "checkbox",
    options: ["Yes"]
  },
  {
    id: "idealFor",
    name: "Ideal For",
    options: ["Men", "Women", "Kids"]
  },
  {
    id: "occasion",
    name: "Occasion",
    options: ["Casual", "Formal", "Party"]
  },
  {
    id: "work",
    name: "Work",
    options: ["Office", "Home", "Outdoor"]
  },
  {
    id: "fabric",
    name: "Fabric",
    options: ["Cotton", "Linen", "Silk"]
  },
  {
    id: "segment",
    name: "Segment",
    options: ["Premium", "Budget"]
  },
  {
    id: "suitableFor",
    name: "Suitable For",
    options: ["Summer", "Winter"]
  },
  {
    id: "rawMaterials",
    name: "Raw Materials",
    options: ["Organic", "Synthetic"]
  },
  {
    id: "pattern",
    name: "Pattern",
    options: ["Solid", "Printed"]
  }
];

export default function DesktopFilter({ filters, setFilters }) {
  return (
    <div className="hidden lg:block w-64 pr-4">
      <h2 className="font-bold mb-4">3425 ITEMS</h2>
      {filterSections.map((section) => (
        <div key={section.id} className="border-b py-2">
          {section.type === "checkbox" ? (
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={section.id}
                className="h-4 w-4"
                checked={filters[section.id] || false}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    [section.id]: e.target.checked
                  }))
                }
              />
              <label htmlFor={section.id} className="text-sm font-medium">
                {section.name.toUpperCase()}
              </label>
            </div>
          ) : (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-2 text-sm font-medium text-left text-gray-900">
                    {section.name.toUpperCase()}
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-4 h-4`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-1">
                    {section.options.map((option) => (
                      <div
                        key={option}
                        onClick={() =>
                          setFilters((prev) => ({
                            ...prev,
                            [section.id]: option
                          }))
                        }
                        className={`text-sm cursor-pointer px-2 py-1 rounded hover:bg-gray-100 ${
                          filters[section.id] === option
                            ? "bg-gray-200 text-black font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          )}
        </div>
      ))}
    </div>
  );
}
