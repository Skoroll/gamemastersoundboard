// Home.jsx
import React from 'react';
import Banner from '../../components/Banner/Banner';
import ThemeCards from "../../components/ThemeCards/ThemeCards"
import places from "../../assets/Places/PlacesCards.json"
import mainBanner from "../../assets/main-banner.webp"
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Banner image={mainBanner} location={"Gamemaster Soundboard"} flavorText={"Votre compagnon pour créer des ambiances efficace et rapide."}/>
      <ThemeCards places={places} />
    </div>
  );
}

export default Home;
