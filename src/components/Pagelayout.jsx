import { useLoaderData } from "react-router-dom"

function PageLayout() {
  return (
    <div className="page__layout flex ">
      <ProductGrid />
      <Widget />
    </div>
  )
}


function ProductGrid() {
  const { orders } = useLoaderData()
  return (
    <div className="product__container">
      <p className="productgrid__text font-bold text-blue font-sans text-xl mx-8 mt-10 ">
        <a href="#">Order Again</a>
      </p>
      <div className=" col-span-4 grid grid-cols-2 gap-4 mx-8 my-6">
       {orders.map(order => {
        const { title, price, image } = order
        return (
       // eslint-disable-next-line react/jsx-key
       <div className="product__section">
        <FoodItems src={image} alt="Image sample logo One" title={title} price={price} className="img__item" />
       </div>
       )
       })};
     </div>
    </div>
  )
};

// eslint-disable-next-line react/prop-types
function FoodItems({ src, altText, title, price }) {
  return (
    <div>
      <img src={src} alt={altText} className="" />
      <p>{title}</p> <p>#{price}</p>
    </div>
  )
}

function Widget() {
  return (
    <div className="widget__container bg-slate-300 p-6 rounded-lg shadow-md mt-24 mb-24">
      <aside className="widget__aside__feature space-y-4">
        <h3 className="font-bold text-blue text-center">Your Order</h3>
        <WidgetDetails classNmae="widget__item" />
        <WidgetDetails classNmae="widget__item" />
        <WidgetDetails classNmae="widget__item" />
        <WidgetDetails classNmae="widget__item" />
        <button type="submit" className="widget__button w-full bg-blue text-white py-2 px-4 rounded-3xl">
          Add 4 for #8,400.00
        </button>
      </aside>
    </div>
  )
}

function WidgetDetails() {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-col space-y-4 ">
        <div className="column__one  flex flex-row space-x-5 ">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-blue">2x</span>
            <p className="text-sm text-grayish">Jollof rice</p>
          </div>
          <div className="flex items-center space-x-6">
            <p className="font-semibold text-grayish">₦2400</p>
          </div>
        </div>
        <div className=" column__two flex flex-row space-x-12">
          <div className=" bg-paleblue rounded-lg">
            <button className="w-6 h-6 text-blue">-</button>
            <span className="font-medium text-blue">2</span>
            <button className="w-6 h-6 text-blue">+</button>
          </div>
          <p className="text-blue-500 text-sm font-medium cursor-pointer hover:underline">Edit</p>
        </div>
      </div>
    </div>
  )
}
export default PageLayout
