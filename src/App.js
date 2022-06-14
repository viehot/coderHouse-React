import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Bienvenido a la Tienda de Rammstein"/>
    </div>
  );
}

export default App;
