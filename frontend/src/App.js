import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import CharactersPage from "./pages/CharactersPage";

/* ============================================
   PERSONA 5 ROYAL - PHANTOM THIEVES WEBSITE
   ============================================
   
   PAGES:
   - / (Home): Hero banner, featured image with red box, video
   - /about: Story and features
   - /products: Merchandise store
   - /characters: Characters & Personas collection guide
   
   USER CONTENT LOCATIONS:
   - Each page has USER CONTENT comments for editable sections
   - Footer has social media links to update
   - See individual page files for specific content areas
   
   ============================================ */

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main className="pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/characters" element={<CharactersPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

/* ============================================
   APP STRUCTURE
   ============================================
   
   /app/frontend/src/
   ├── App.js               (this file - main router)
   ├── App.css              (Persona 5 specific styles)
   ├── index.css            (Global styles, fonts, CSS vars)
   ├── components/
   │   ├── Navbar.jsx       (Navigation - edit nav links)
   │   └── Footer.jsx       (Footer - edit social/purchase links)
   └── pages/
       ├── HomePage.jsx     (Banner, feature image, video)
       ├── AboutPage.jsx    (Story, features)
       ├── ProductsPage.jsx (Merchandise listings)
       └── CharactersPage.jsx (Characters & Personas)
   
   ============================================ */
