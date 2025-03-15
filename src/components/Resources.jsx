import React from "react";
import { resources } from "../ressurser"; // Importer ressursene fra ressurser.js

function Resources({ category }) {
  // Filtrer ressursene basert på kategorien som er sendt som en prop
  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );

  // Logg kategorien til konsollen for feilsøking
  console.log(category);

  // Tilpasser spesfikt  tittelen for "headless-cms" til "sanity and headless CMS"
  const categoryTitle = category === "headless-cms" ? "sanity and headless CMS" : category;

  return (
    <div>
      {/* Vis tittelen for kategorien */}
      <h2>{categoryTitle}</h2>

      {/* List opp de filtrerte ressursene */}
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            {/* Lenke til ressursen med target="_blank" for å åpne i ny fane */}
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title} {/* Vis tittelen på ressursen */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources; 