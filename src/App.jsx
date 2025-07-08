import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import { MovieProvider } from "./context/MoviesContext";
import Favorites from "./pages/Favourate";

function App() {
  return (
    <MovieProvider>
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
