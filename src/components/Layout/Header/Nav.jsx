import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Places from "../../../assets/Places/PlacesCards.json";


function Nav() {
    const [openMenu, setOpenMenu] = useState(null);
    const navigate = useNavigate();

    // Fonction pour basculer l'ouverture/fermeture des sous-menus
    function toggleMenu(menuName) {
        setOpenMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
    }

    // Fonction pour naviguer vers une sous-catégorie
    const handleClick = (placeRef, subRef) => {
        navigate(`/${placeRef.toLowerCase()}/${subRef.toLowerCase()}`);
        window.location.reload(false);
    };

    return (
        <nav className="nav">
            <div className="nav__links">
                <button className="nav__links--button">Accueil</button>
                <button className="nav__links--button">Contact</button>
                <button className="nav__links--button">A propos</button>
            </div>
            <div className="nav__theme">
                {Places.map((place) => (
                    <div
                        key={place.id}
                        onMouseEnter={() => toggleMenu(place.refName)} // Active le menu au survol
                        onMouseLeave={() => toggleMenu(null)} // Ferme le menu uniquement si le curseur quitte toute la div
                        className="nav__theme--container"
                    >
                        <p>{place.name}</p>
                        {place.subCategories.length > 0 && (
                            <ul
                                className={`nav__theme--details ${
                                    openMenu === place.refName ? "nav__theme--open" : ""
                                }`}
                            >
                                {place.subCategories.map((subCategory) => (
                                    <li
                                        key={subCategory.subRef}
                                        className="btn"
                                        onClick={() => handleClick(place.refName, subCategory.subRef)} // Ajout de la gestion du clic
                                    >
                                        {subCategory.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Nav;
