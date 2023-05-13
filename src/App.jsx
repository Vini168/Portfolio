import "./App.css";
import Perfil from "./components/Perfil";
import Footer from "./components/Footer";
import Contato from "./components/Contato";
import Cursos from "./components/Cursos";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { BrowserRouter as Navegador, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navegador>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </Navegador>
      <Footer />
    </>
  );
}
export default App;