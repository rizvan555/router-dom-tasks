import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Speisekarte from "./pages/Speisekarte";
import Kontakt from "./pages/Kontakt";
import Oeffnungszeiten from "./pages/Oeffnungszeiten";
import Galerie from "./pages/Galerie";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/speisekarte" element={<Speisekarte />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route>
        <Route path="/oeffnungszeiten" element={<Oeffnungszeiten />}></Route>
        <Route path="/galerie" element={<Galerie />}></Route>
      </Routes>
    </div>
  );
}

export default App;
