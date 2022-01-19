import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="HomePage">
        <h2>The Skooma Den</h2>
        <h3>Vendor of Fine Cognitive Enhancers</h3>

        <h5>
          Nootropics, Chemicals, and Fine Herbs 
        </h5>
        <Link id="HomePageShopLink" to="/shop">ENHANCE COGNITION</Link>
      </div>
    </div>
  );
}

export default App;
