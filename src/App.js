import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Rutas, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";

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
          <Route path="/category" element={<Category />} />
          <Route path="/item" element={<DetailItem />} />
        </Routes>
      </Rutas>
    </div>
  );
}

export default App;
