import { useLoaderData } from "react-router-dom"

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
  const { orders } = useLoaderData()
  return (
    <div>
      <div className="order__container">
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
        <p className="ordergrid__text font-bold text-blue font-sans text-xl mx-8 mt-10 ">
          <a href="#">Snack</a>
        </p>{" "}
      </div>
      <div className=" pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-8 my-6">
        {orders.map(order => {
          const { title, price, image } = order
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="product__section ">
              <FoodItems src={image} alt="Image one" title={title} price={price} className="img__item" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function FoodItems({ src, altText, title, price }) {
  return (
    <div className=" ">
      <img src={src} alt={altText} className="" />
      <p>{title}</p> <p>#{price}</p>
    </div>
  )
}

export default Order
