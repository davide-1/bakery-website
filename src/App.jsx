import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Menu from "./components/Menu"
import PhotoGallery from "./components/PhotoGallery"
import ContactUs from "./components/ContactUs"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import AlmondCookies from "./components/AlmondCookies"
import PuffPastry from "./components/PuffPastry"
import Cake from "./components/Cake"
import Pizza from "./components/Pizza"
import QuickFoodNav from "./components/QuickFoodNav"

function App() {
  

  return (
    <div className="">
        <NavBar />
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/menu"
            element={<Menu />}
          />
          <Route 
            path="/photoGallery"
            element={<PhotoGallery />}
          />
          <Route 
            path="/contactUs"
            element={<ContactUs />}
          />
          <Route 
            path="/aboutUs"
            element={<AboutUs />}
          />
          <Route 
            path="/almondCookies"
            element={<AlmondCookies />}
          /> 
          <Route 
            path="/puffPastry"
            element={<PuffPastry />}
          />
          <Route 
            path="/cake"
            element={<Cake />}
          />
          <Route 
            path="/pizza"
            element={<Pizza />}
          />
          <Route 
            path="/quickFoodNav"
            element={<QuickFoodNav />}
          />
        </Routes> 
        <Footer />
    </div>
  )
}

export default App
