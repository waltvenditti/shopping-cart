import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
import SkoomaDen from './skooma-den.jpeg';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="HomePage">
        <h2>The Skooma Den</h2>
        <img src={SkoomaDen} alt="Screenshot from Morrowind" width="800px"/>
        <h3>Vendor of Cognitive Enhancers</h3>
        <h5>
          Nootropics, Chemicals, and Fine Herbs 
        </h5>
        <Link id="HomePageShopLink" to="/shop">ENHANCE COGNITION</Link>
      </div>
    </div>
  );
}

export default App;
