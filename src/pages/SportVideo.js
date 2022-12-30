import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Data from "../ListData";
import HorizontalCardsSlider from "../components/HorizontalCardsSlider";
const SportVideo = () => {
  let { id } = useParams();
  return (
    <div className="liveShow-details">
      <Navbar />
      <div className="video">
        <iframe
          width="100%"
          height="630"
          src={Data[1].isLive[id].video}
        ></iframe>
      </div>
      <div className="showInfo">
        <h2 className="title">{Data[1].isLive[id].title}</h2>
        <h4 className="subTitle">{Data[1].isLive[id].subTitle}</h4>
        <h6 className="detail"> {Data[1].isLive[id].detail}</h6>
      </div>
      <div className="add-share">
        <div className="add">
          <i
            class="fa fa-plus"
            style={{ fontSize: "30px", color: "#909999" }}
          ></i>
          <h3>Watchlist</h3>
        </div>
        <div className="share">
          <i
            class="fa fa-share-alt"
            style={{ fontSize: "30px", color: "#909999" }}
          ></i>
          <h3>Share</h3>
        </div>
      </div>
      <hr />

      <HorizontalCardsSlider
        title={"Popular from Tournament"}
        Data={Data[1].isLive}
        isLive={true}
      />

      <Footer />
    </div>
  );
};

export default SportVideo;
