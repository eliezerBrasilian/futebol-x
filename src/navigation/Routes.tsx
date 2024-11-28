import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import { Rotas } from "./Rotas";
import { Home } from "../pages/Home";
import { Header } from "./Header/Header";
import { MatchDetails } from "../pages/MatchDetails/MatchDetails";
import { MatchList } from "../pages/MatchList/MatchList";

export function RoutesApp() {
  const detailsRoute = Rotas.DETAILS + "/:id";
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={Rotas.HOME} element={<Home />} />

        <Route path={detailsRoute} element={<MatchDetails />} />
        <Route path={Rotas.TODAY} element={<MatchList />} />
        <Route path={Rotas.TOMORROW} element={<MatchList />} />
      </Routes>
      <footer>
        © 2024 Futebol X - Todos os direitos reservados ® É proibida a
        reprodução parcial ou total do nosso conteúdo. Versão 1.0.0
      </footer>
    </BrowserRouter>
  );
}
