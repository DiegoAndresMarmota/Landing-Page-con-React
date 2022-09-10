import "./App.css";
import { Home } from "./component/Home";
import { NavBar } from "./component/Navbar";

function App() {
  return (
    <div>
      
      <div className="header">
        <NavBar />
      </div>

      <div className="home">
        <Home />
      </div>

    </div>
  );
}

export default App;
