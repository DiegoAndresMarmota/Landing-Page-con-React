//import "./App.css";
import { Card } from "./component/Card";
import { Footer } from "./component/Footer";
import { Home } from "./component/home";
import { Jumbotron } from "./component/jumbotron";
import { NavBar } from "./component/Navbar";

function App() {

  return (
    <div className="layout">
      
      <div className="header">
        <NavBar />
      </div>

      <div className="home">
        <Home />
      </div>

      <div className="card">
        <Card />
      </div>

      <div className="jumbotron">
        <Jumbotron />
      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
