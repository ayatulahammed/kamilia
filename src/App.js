import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Header from "./Component/header/header";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
    </BrowserRouter>
  );
}

export default App;
