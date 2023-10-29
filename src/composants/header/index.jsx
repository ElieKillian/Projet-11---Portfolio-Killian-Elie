import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


function Header(){

    const location = useLocation();

    useEffect(() => {
      const currentUrl = location.pathname;
      const menuLinks = document.querySelectorAll("a.header__right__link");
  
      menuLinks.forEach((link) => {
        if (link.pathname === currentUrl) {
          link.classList.add("active");
        } else  {
          link.classList.remove("active");
        }
      });
    }, [location]);

    return(
        <header className="header">
            <div className="header__left">
                <h1>Killian Elie</h1>
                <p>Intégrateur Web</p>
            </div>
            <nav className="header__right">
                <Link to='/' className="header__right__link">Accueil</Link>
                <Link to='/skills' className="header__right__link">Compétences</Link>
                <Link to='/projects' className="header__right__link">Réalisations</Link>
                <Link to='/contact' className="header__right__link">Contact</Link>
            </nav>
        </header>
    )
};

export default Header;