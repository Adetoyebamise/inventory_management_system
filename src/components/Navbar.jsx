import { HiChevronDown } from "react-icons/hi"
import { RxAvatar } from "react-icons/rx"
import logo from "/assets/Logo.png"

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center mx-4 my-4">
        <div className="flex items-center space-x-2 mt-4">
          <img src={logo} alt="Logo" className="h-8 w-18" />
        </div>
        <div className="flex items-center space-x-3">
          <div className="">
            <RxAvatar className="swap-on h-4 w-4" />
          </div>
          <span>John Kennedy</span>
          <HiChevronDown className="swap-on h-4 w-4" />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
