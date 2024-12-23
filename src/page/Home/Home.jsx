// Home.jsx
import React, {useEffect} from 'react';
import Banner from '../../components/Banner/Banner';
import ThemeCards from "../../components/ThemeCards/ThemeCards"
import places from "../../assets/Places/PlacesCards.json"
import mainBanner from "../../assets/main-banner.webp"
import "./Home.scss";

function Home() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="home">
      <Banner image={mainBanner} location={"Gamemaster Soundboard"} flavorText={"Votre compagnon pour créer des ambiances efficace et rapide."}/>
      <div className="home--welcome-text">
        <h1>Gamemaster Soundboard</h1>
        <h2>Votre compagnon pour créer des ambiances efficace et rapide.</h2>
      </div>
      <ThemeCards places={places} />
    </div>
  );
}

export default Home;
