
import { listAll } from "firebase/storage"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="w-1/6 bg-gray-800 p-4 sticky left-0 h-screen overflow-y-auto">
      <ul className="flex flex-col gap-4">
        <li>
          <div className="h-10 text-white hover:bg-gray-700 hover:bg-opacity-50 rounded cursor-pointer duration-300 flex items-center justify-center w-5/6">
            <Link to='/admin'>Home</Link>
          </div>
        </li>
        <li>
          <div className="h-10 text-white hover:bg-gray-700 hover:bg-opacity-50 rounded cursor-pointer duration-300 flex items-center justify-center">
            <Link to='/admin/add/Add'>Add Product</Link>
          </div>
        </li>
        <li>
          <div className="h-10 text-white hover:bg-gray-700 hover:bg-opacity-50 rounded cursor-pointer duration-300 flex items-center justify-center">
            <Link to='/admin/order'>Orders</Link>
          </div>
        </li>
        <li>
          <div className="h-10 text-white hover:bg-gray-700 hover:bg-opacity-50 rounded cursor-pointer duration-300 flex items-center justify-center">
            <Link to='/admin/view'>View Products</Link>
          </div>
        </li>
      </ul>
    </div>
 
  )
}

export default Navbar