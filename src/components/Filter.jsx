import React from "react"

function Filter() {
  return (
    <div className="flex flex-col items-center space-y-8 mb-8">
      <div>
        <h2 className="font-extrabold text-blue text-center">Categories</h2>
      </div>
      <div className="space-x-4 ">
        <button className="border border-blue rounded-3xl font-bold text-blue text-center p-2" type="Food">
          Food
        </button>
        <button className="border border-blue rounded-3xl font-bold text-blue text-center p-2" type="Drink">
          Drink
        </button>
        <button className="border border-blue rounded-3xl font-bold text-blue text-center p-2" type="Snack">
          Snack
        </button>
        <button className="border border-blue rounded-3xl font-bold text-blue text-center p-2" type="Pastries">
          Pastries
        </button>
      </div>
    </div>
  )
}

export default Filter
