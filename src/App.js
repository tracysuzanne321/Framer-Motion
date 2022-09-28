import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Animate from "./Pages/Animate";
import InitialState from "./Pages/InitialState";
import Transition from "./Pages/Transition";
import Hover from "./Pages/Hover";
import Variants from "./Pages/Variants";

function App() {
  return (
    <div className="App">
      <h1>Framer Motion Examples</h1>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/animate">Animate</Link>
          <Link to="/initial-state">Initial State</Link>
          <Link to="/transition">Transition</Link>
          <Link to="/hover">Hover</Link>
          <Link to="/variants">Variants</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="animate" element={<Animate />} />
          <Route path="/initial-state" element={<InitialState />} />
          <Route path="/transition" element={<Transition />} />
          <Route path="/hover" element={<Hover />} />
          <Route path="/variants" element={<Variants />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
