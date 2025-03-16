import { Routes, Route } from "react-router-dom"; // Importer Routes og Route for routing
import Layout from "./components/Layout"; // Importer Layout-komponenten
import Resources from "./components/Resources"; // Importer Resources-komponenten
import PageTitle from "./components/PageTitle"; // Importer PageTitle-komponenten

function App() {
  return (
    <Layout>
      <PageTitle title="Ressursarkiv" /> {/* Tittel */}
      <Routes>
        {/* Definerer ruter for hver kategori */}
        <Route path="/html" element={<Resources category="html" />} />
        <Route path="/css" element={<Resources category="css" />} />
        <Route path="/javascript" element={<Resources category="javascript" />} />
        <Route path="/react" element={<Resources category="react" />} />
        <Route path="/sanity" element={<Resources category="headless-cms" />} />
      </Routes>
    </Layout>
  );
}

export default App; 