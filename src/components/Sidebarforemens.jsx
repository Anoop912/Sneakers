import { useState } from "react";

export function Sidebarforemens({ onFilterChange }) {
  const [open, setOpen] = useState(false); // MOBILE SIDEBAR STATE

  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectComposition, setComposition] = useState(null);
  const [selectproperties, setproperties] = useState([]);

  const prices = [
    { label: "$200 - $220", value: [200, 220] },
    { label: "$220 - $240", value: [220, 240] },
    { label: "$240 - $260", value: [240, 260] },
    { label: "$260 - $300", value: [260, 300] },
  ];

  const sizes = ["S", "M", "L", "XL"];
  const colors = [
    { name: "White", code: "#ffffff" },
    { name: "Red", code: "#ff0000" },
    { name: "Black", code: "#000000" },
    { name: "Orange", code: "#ff7a00" },
    { name: "Blue", code: "#0057ff" },
    { name: "Green", code: "#1ec41e" },
    { name: "Yellow", code: "#ffeb00" },
  ];

  const Composition = ["Cotton", "Dressy", "Girly"];
  const Properties = [
    "ColourFull Dress",
    "Maxi Dress",
    "Midi Dress",
    "Short Dress",
    "Short Sleeve",
  ];

  const updateFilters = () => {
    onFilterChange({
      selectedPrice,
      selectedSizes,
      selectedColors,
      selectComposition,
      selectproperties,
    });
  };

  const resetFilters = () => {
    setSelectedPrice(null);
    setSelectedSizes([]);
    setSelectedColors([]);
    setComposition(null);
    setproperties([]);

    onFilterChange({
      selectedPrice: null,
      selectedSizes: [],
      selectedColors: [],
      selectComposition: null,
      selectproperties: [],
    });
  };

  return (
    <>
      {/* MOBILE FILTER BUTTON */}
      <button
        className="md:hidden m-4 px-4 py-2 bg-black text-white rounded"
        onClick={() => setOpen(true)}
      >
        Filter
      </button>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white z-40 overflow-y-scroll
          w-[70vw] p-6 border-r-2 border-gray-200 shadow-lg
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}

          md:static md:translate-x-0 md:w-[20vw] md:m-4 md:p-6 md:h-auto
        `}
      >
        {/* CLOSE BUTTON (MOBILE) */}
        <button
          className="md:hidden mb-4 text-black font-bold"
          onClick={() => setOpen(false)}
        >
          ✕ Close
        </button>

        <div className="h-10 w-full font-bold text-gray-700 flex items-center border-2 border-gray-200 mb-4">
          FOR MEN
        </div>

        <h2 className="font-semibold mb-4 text-gray-700">FILTER BY</h2>

        <button
          onClick={resetFilters}
          className="mb-4 px-4 py-2 text-sm font-bold bg-gray-800 hover:bg-white hover:text-black cursor-pointer text-white"
        >
          X Clear All
        </button>

        {/* PRICE */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2 text-gray-600">PRICE</h3>
          {prices.map((p) => (
            <label key={p.label} className="flex items-center gap-2 mb-2 text-sm">
              <input
                type="radio"
                name="price"
                checked={
                  selectedPrice &&
                  selectedPrice.toString() === p.value.toString()
                }
                onChange={() => {
                  setSelectedPrice(p.value);
                  updateFilters();
                }}
                className="accent-red-500"
              />
              {p.label}
            </label>
          ))}
        </div>

        {/* SIZE */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2 text-gray-600">SIZE</h3>

          {sizes.map((size) => (
            <label key={size} className="flex items-center gap-2 mb-2 text-sm">
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() => {
                  const updated = selectedSizes.includes(size)
                    ? selectedSizes.filter((s) => s !== size)
                    : [...selectedSizes, size];

                  setSelectedSizes(updated);
                  updateFilters();
                }}
                className="accent-red-500"
              />
              {size}
            </label>
          ))}
        </div>

        {/* COLORS */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2 text-gray-600">COLOR</h3>

          {colors.map((c) => (
            <label key={c.name} className="flex items-center gap-3 mb-2 text-sm">
              <div
                className="w-4 h-4 rounded-sm border"
                style={{ backgroundColor: c.code }}
              ></div>

              <input
                type="checkbox"
                checked={selectedColors.includes(c.name)}
                onChange={() => {
                  const updated = selectedColors.includes(c.name)
                    ? selectedColors.filter((x) => x !== c.name)
                    : [...selectedColors, c.name];

                  setSelectedColors(updated);
                  updateFilters();
                }}
                className="accent-red-500"
              />
              {c.name}
            </label>
          ))}
        </div>

        {/* COMPOSITION */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2 text-gray-600">COMPOSITION</h3>

          {Composition.map((p) => (
            <label key={p} className="flex items-center gap-2 mb-2 text-sm">
              <input
                type="radio"
                name="composition"
                checked={selectComposition === p}
                onChange={() => {
                  setComposition(p);
                  updateFilters();
                }}
                className="accent-red-500"
              />
              {p}
            </label>
          ))}
        </div>

        {/* PROPERTIES */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2 text-gray-600">PROPERTIES</h3>

          {Properties.map((p) => (
            <label key={p} className="flex items-center gap-2 mb-2 text-sm">
              <input
                type="checkbox"
                checked={selectproperties.includes(p)}
                onChange={() => {
                  const updated = selectproperties.includes(p)
                    ? selectproperties.filter((x) => x !== p)
                    : [...selectproperties, p];

                  setproperties(updated);
                  updateFilters();
                }}
                className="accent-red-500"
              />
              {p}
            </label>
          ))}
        </div>
      </div>
    </>
  );
}

