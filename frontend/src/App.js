import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter ,  Routes, Route,  } from 'react-router-dom';
 import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Office from './Components/Office/Office';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category='mens' />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category='womens' />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category='kids' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} /> </Route>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/office' element={<Office />} />

            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup/>} />
            
         
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
