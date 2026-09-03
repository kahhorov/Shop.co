import BrandLogos from "./components/BrandLogos";
import Herro from "./components/Herro";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";

function App() {
  return (
    <div className="border">
      <div className="container">
        <Navbar />
      </div>
      <Herro />
      <BrandLogos />
      <NewArrivals />
    </div>
  );
}

export default App;
