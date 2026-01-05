import "./App.css";
import Contador from "./components/Contador";
import ListarUsuarios from "./components/ListarUsuarios";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      <Contador />
      <ListarUsuarios />
      <LoginForm />
    </div>
  );
}

export default App;
