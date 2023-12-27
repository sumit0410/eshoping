import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import BackToTop from "./components/BackToTop/BackToTop";
import NotFound from "./components/NotFound/NotFound";
import FavouriteProd from "./components/FavouriteProd.jsx/FavouriteProd";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourite-products" element={<FavouriteProd />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
      <BackToTop />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
