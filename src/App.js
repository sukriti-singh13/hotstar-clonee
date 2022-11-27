import Navbar from "./components/Navbar.js";
import HeroSection from "./components/HeroSection"
import List from "./components/List"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HeroSection/>
      <List/>
      <Footer/>
    </div>
  );
}

export default App;
