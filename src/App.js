import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Rutas, Routes, Route } from "react-router-dom";

// Estilos CSS
import "./App.css";

//Componentes
import NavBar from "./components/NavBar/NavBar";

//Vistas
import Home from "./views/Home";
import Category from "./views/Category";
import DetailItem from "./views/DetailItem";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Rutas>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/item/:id" element={<DetailItem />} />
        </Routes>
      </Rutas>
    </div>
  );
}

export default App;
