import React from "react";
import Nav from "./Nav"; // Importer Nav-komponenten
import "../styles/layout.scss"; // Importer SCSS-filen for styling

function Layout({ children }) {
  return (
    <div className="layout">
      {/* Navigasjonsmeny */}
      <nav>
        <Nav /> {/* Her brukes Nav-komponenten i stedet for direkte HTML */}
      </nav>

      {/* Hovedinnholdet på siden */}
      <main>
        <section id="container">
          {children} {/* Innholdet som sendes til Layout-komponenten vises her */}
        </section>
      </main>

    </div>
  );
}

export default Layout;
