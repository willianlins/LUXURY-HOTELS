import { Routin } from "./Routin"
import { BrowserRouter } from "react-router-dom";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routin />
    </BrowserRouter>
  );
}

export default App;
