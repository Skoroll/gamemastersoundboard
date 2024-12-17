import React, { useState } from "react";
import Places from "../../../assets/Places/PlacesCards.json";

function Nav() {
    const [openMenu, setOpenMenu] = useState(null);

    function toggleMenu(menuName) {
        setOpenMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
    }

    return (
        <nav className="nav">
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
                                {place.subCategories.map((subCategory, index) => (
                                    <li className="btn" key={index}>{subCategory.name}</li>
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
