"use client"

import AdditionalFilterBox from "./AdditionalFilterBox"

const LeftSidebar = ({ selectedCategory, price, onCategoryChange, onPriceChange }) => {
  return (
    <aside className="w-full md:w-1/4 px-4 space-y-6">
      {/* Main Filters Box */}
      <div className="bg-[#1e40af] text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-6 text-white">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-base font-semibold mb-4 text-white">Category</h3>
          <div className="space-y-3">
            {["All", "Electronics", "Clothing", "Home"].map((cat) => (
              <label key={cat} className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={onCategoryChange}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-white flex items-center justify-center ${
                      selectedCategory === cat ? "bg-white" : "bg-transparent"
                    }`}
                  >
                    {selectedCategory === cat && <div className="w-2 h-2 rounded-full bg-[#1e40af]"></div>}
                  </div>
                </div>
                <span className="ml-3 text-sm text-white group-hover:text-blue-100 transition-colors font-poppins">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-base font-semibold mb-4 text-white">Price</h3>
          <div className="space-y-3">
            <input
              type="range"
              min={0}
              max={1000}
              value={price}
              onChange={onPriceChange}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #ffffff 0%, #ffffff ${(price / 1000) * 100}%, #93c5fd ${(price / 1000) * 100}%, #93c5fd 100%)`,
              }}
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-100">$0</span>
              <span className="text-sm font-medium text-white bg-blue-600 px-2 py-1 rounded">${price}</span>
              <span className="text-sm text-blue-100">$1000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Filter Box */}
      <AdditionalFilterBox
        selectedCategory={selectedCategory}
        price={price}
        onCategoryChange={onCategoryChange}
        onPriceChange={onPriceChange}
      />
    </aside>
  )
}

export default LeftSidebar
