import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="HomePage">
        <h2>The Skooma Den</h2>
        <h3>Your One-Stop Shop for Cognitive Enhancers</h3>
        <h5>
          (Not affliated with Bethesda Studios, The Elder Scrolls game series, or any else. Please stop sending me cease and
          desist letters!)
        </h5>
        <h5>
          Also please note that we do not actually sell skooma, as such a product does not actually exist.
        </h5>
        <Link id="HomePageShopLink" to="/shop">ENHANCE COGNITION</Link>
      </div>
    </div>
  );
}

export default App;
