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

// Huc provider
import { CarritoProvider } from "./CartContext";

function App() {
  return (
    <Rutas>
      <CarritoProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:idCategory" element={<Category />} />
            <Route path="/item/:id" element={<DetailItem />} />
          </Routes>
        </div>
      </CarritoProvider>
    </Rutas>
  );
}

export default App;
