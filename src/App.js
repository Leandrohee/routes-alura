import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio/inicio";
import SobreMim from "./paginas/sobreMim/SobreMim";
import MenuNavegacao from "./components/menuNavegacao/menuNavecacao";


export default function App() {
  return (
    <BrowserRouter>
      <MenuNavegacao/>

      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
      </Routes>
    </BrowserRouter>
    );
}