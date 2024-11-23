import React from "react"
import ImageSampleLogoOne from "/src/assets/mealone.png"
import ImageSampleLogoTwo from "/src/assets/mealthree.png"

function Order() {
  return (
    <div className="page__layout flex ">
      <Sidebar />
      <OrderGrid />
    </div>
  )
}
function Sidebar() {
  return (
    <aside>
      <div className="flex flex-col mt-10">
        <div className="ml-6">
          <p>More Categories</p>
        </div>
        <div className="space-y-1.5 bg-paleblue mt-6 ml-6">
          <li className="list-none">Snacks</li>
          <li className="list-none">Pastries</li>
          <li className="list-none">Drinks</li>
          <li className="list-none">Food</li>
          <li className="list-none">Others</li>
        </div>
      </div>
    </aside>
  )
}
function OrderGrid() {
  return (
    <div className="product__container">
      <div className="flex flex-row">
        <div className="mr-2">
          <p>Category </p>{" "}
        </div>
        <div>
          <p> &gt;</p>
        </div>
        <div className="ml-2">
          <p>
            <span>Snack</span>
          </p>
        </div>
      </div>
      <p className="productgrid__text font-bold text-blue font-sans text-xl mx-8 mt-10 ">
        <a href="#">Snack</a>
      </p>
      <section className="product__section col-span-4 grid grid-cols-3 gap-4 mx-8 my-6">
        <FoodItems src={ImageSampleLogoOne} alt="Image sample logo One" className="img__item" />
        <FoodItems src={ImageSampleLogoTwo} alt="Image sample logo two" className="img__item" />
        <FoodItems src={ImageSampleLogoOne} alt="Image sample logo One" className="img__item" />
        <FoodItems src={ImageSampleLogoTwo} alt="Image sample logo two" className="img__item" />
        <FoodItems src={ImageSampleLogoOne} alt="Image sample logo One" className="img__item" />
        <FoodItems src={ImageSampleLogoTwo} alt="Image sample logo two" className="img__item" />
      </section>
    </div>
  )
}

function FoodItems({ src, altText }) {
  return (
    <div>
      <img src={src} alt={altText} className="" />
    </div>
  )
}

export default Order
