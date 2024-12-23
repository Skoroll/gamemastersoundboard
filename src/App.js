import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Home from "./page/Home/Home"
import PlaceDetails from "./page/PlaceDetails/PlaceDetails";
import SubDetails from "./page/SubDetails/SubDetails";
import Theme from "./assets/Places/PlacesCards.json";
import ErrorBoundary from "./components/utils/ErrorBoundary";
import About from "./page/About/About";
import Contact from "./page/Contact/Contact";
import "./styles/base.scss";

console.log(Theme); // Vérifie le contenu des données ici

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<PlaceDetails />} />
              <Route path="/:id/:subRef" element={<SubDetails />} />
              <Route path="/a-propos" element={<About/>} />
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </main>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
