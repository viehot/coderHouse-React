import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Bienvenido a la Tienda de Rammstein"/>
      <ItemCount stock={5} inicial={0} />
    </div>
  );
}

export default App;
