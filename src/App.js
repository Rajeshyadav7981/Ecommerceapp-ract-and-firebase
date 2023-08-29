import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Footer, Header} from './components'
import Single from './pages/home/Single';
import {Home,Cart,Login,Register,Reset} from './pages'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './pages/cart/Checkout';
import Admin from './pages/admin/Admin';
import Checkoutsb from './pages/cart/Checkoutsb';
import Checkoutcorrect from './pages/cart/Checkoutcorrect';
import Ordersuccess from './pages/cart/Ordersuccess';
import Orderhistory from './pages/cart/Order-history';



function App() {
  return (
    <>
    <ToastContainer/>
    <div>
      <BrowserRouter>
      <Header/>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/reset' element={<Reset/>}/>
      <Route path='/admin/*'element={<Admin/>}/>
      <Route path='/single/:id' element={<Single/>}/>
      <Route path='/checkout'element={<Checkout/>}/>
      <Route path='/checkoutsbilling'element={<Checkoutsb/>}/>
      <Route path='/checkoutcorrect'element={<Checkoutcorrect/>}/>
      <Route path='/order-success' element={<Ordersuccess/>}/>
      <Route path='/order-history' element={<Orderhistory/>}/>
      
     
      </Routes>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App