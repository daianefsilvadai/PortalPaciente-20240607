import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Perfil from "./Components/Perfil/Perfil";
import Home from "./Components/Home/Home";
import Cadastro from "./Components/Cadastro/Cadastro";
import Atualizacao from "./Components/Atualizacao/Atualizacao";
import Agendamento from "./Components/Agendamento/Agendamento";
import Historico from "./Components/Historico/Historico";
import Container from "./Components/Container/Container";
import PortalPaciente from "./Components/PortalPaciente/PortalPaciente";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Cadastro" element={<Cadastro />}></Route>
          <Route path="/Agendamento" element={<Agendamento />}></Route>
          <Route path="/Perfil" element={<Perfil />}></Route>
          <Route path="/Atualizacao" element={<Atualizacao />}></Route>
          <Route path="/Historico" element={<Historico />}></Route>
          <Route path="/PortalPaciente" element={<PortalPaciente />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default AppRoutes;
