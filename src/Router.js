import { Routes, Route } from "react-router-dom";
import "./styles/Main.css";
import { HomePage, CharacterDetailPage } from './pages';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<CharacterDetailPage />} />
    </Routes>
  );
}

export default Router;
