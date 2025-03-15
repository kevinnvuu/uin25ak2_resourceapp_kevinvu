import React from "react";
import { NavLink } from "react-router-dom"; // Importer NavLink for navigasjonslenker med aktiv tilstand

function Nav() {
  return (
    <ul>
      {/* HTML-lenke */}
      <li>
        <NavLink
          to="/html" // Destinasjonen for lenken (navigerer til /html)
          className={({ isActive }) => (isActive ? "active" : "")} // Legg til "active"-klassen hvis lenken er aktiv
        >
          HTML
        </NavLink>
      </li>

      {/* CSS-lenke */}
      <li>
        <NavLink
          to="/css" // Destinasjonen for lenken (navigerer til /css)
          className={({ isActive }) => (isActive ? "active" : "")} // Legg til "active"-klassen hvis lenken er aktiv
        >
          CSS
        </NavLink>
      </li>

      {/* JavaScript-lenke */}
      <li>
        <NavLink
          to="/javascript" // Destinasjonen for lenken (navigerer til /javascript)
          className={({ isActive }) => (isActive ? "active" : "")} // Legg til "active"-klassen hvis lenken er aktiv
        >
          JavaScript
        </NavLink>
      </li>

      {/* React-lenke */}
      <li>
        <NavLink
          to="/react" // Destinasjonen for lenken (navigerer til /react)
          className={({ isActive }) => (isActive ? "active" : "")} // Legg til "active"-klassen hvis lenken er aktiv
        >
          React
        </NavLink>
      </li>

      {/* Sanity and headless CMS-lenke */}
      <li>
        <NavLink
          to="/sanity" // Destinasjonen for lenken (navigerer til /sanity)
          className={({ isActive }) => (isActive ? "active" : "")} // Legg til "active"-klassen hvis lenken er aktiv
        >
          Sanity and headless CMS
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav; // Eksporter Nav-komponenten slik at den kan brukes andre steder