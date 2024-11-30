import "./App.css";

import { CabecalhoContextProvider } from "./context/CabecalhoContext";
import { ApiContextProvider } from "./context/ApiContext";
import { RoutesApp } from "./navigation/Routes";

function App() {
  return (
    <CabecalhoContextProvider>
      <ApiContextProvider>
        <RoutesApp />
      </ApiContextProvider>
    </CabecalhoContextProvider>
  );
}

export default App;
