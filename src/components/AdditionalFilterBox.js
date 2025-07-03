"use client"

const AdditionalFilterBox = ({ selectedCategory, price, onCategoryChange, onPriceChange }) => {
  return (
    <div className="bg-white text-[#003087] p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-[#003087]">Category</h2>

      {/* Category Filter */}
      <div className="mb-5">
        <div className="space-y-2 text-sm">
          {["All", "Electronics", "Clothing", "Home"].map((cat) => (
            <label key={cat} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="brand"
                value={cat}
                checked={selectedCategory === cat}
                onChange={onCategoryChange}
                className="mr-2 w-4 h-4 text-[#003087] border-gray-300 focus:ring-[#003087] focus:ring-2"
              />
              <span className="text-[#003087]">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Input */}
      <div>
        <p className="font-medium mb-2 text-[#003087]">Price</p>
        <input
          type="text"
          value={price}
          onChange={(e) => onPriceChange({ target: { value: e.target.value } })}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-[#003087] focus:outline-none focus:ring-2 focus:ring-[#003087] focus:border-[#003087]"
          placeholder="1000"
        />
      </div>
    </div>
  )
}

export default AdditionalFilterBox
