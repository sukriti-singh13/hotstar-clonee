import Navbar from "./components/Navbar.js";
import HeroSection from "./components/HeroSection"
// import List from "./components/List"
import Footer from "./components/Footer"
import HorizontalCardsSlider from "./components/HorizontalCardsSlider.js";
import Data from "./ListData.js";
function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HeroSection/>
      <HorizontalCardsSlider title={"Latest & Trending"} Data={Data[0].latestMovie} />
      <HorizontalCardsSlider title={"Best in Sports"} Data={Data[1].isLive} isLive={true}/>
      <HorizontalCardsSlider title={"Thanksgiving Specials"} Data={Data[0].latestMovie} />
      <HorizontalCardsSlider title={"Popular Shows"} Data={Data[0].latestMovie} />
      <HorizontalCardsSlider title={"Movies Recommended For You"} Data={Data[0].latestMovie} />
      {/* <List/> */}
      <Footer/>
    </div>
  );
}

export default App;
