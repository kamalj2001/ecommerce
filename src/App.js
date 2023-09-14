import "./App.css";
import Footer from "./components/Footer/Footer";
import Haeder from "./components/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Testimonials from "./components/Testimonials/Testimonials";
import Virtual from "./components/Virtual/Virtual";
function App() {
  return (
    <div className="App">
        <Haeder />
        <Hero />
        <Slider />
        <Virtual /> 
        <Products />
        <Testimonials />
        <Footer />
    </div>
  );
}

export default App;
