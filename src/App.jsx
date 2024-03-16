import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Menu from "./components/Menu"
import PhotoGallery from "./components/PhotoGallery"
import ContactUs from "./components/ContactUs"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"

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
        </Routes> 
        <Footer />
    </div>
  )
}

export default App
