import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Animate from "./Pages/Animate";
import InitialState from "./Pages/InitialState";
import Transition from "./Pages/Transition";

function App() {
  return (
    <div className="App">
      <h1>Framer Motion Examples</h1>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="animate" element={<Animate />} />
          <Route path="/initial-state" element={<InitialState />} />
          <Route path="/transition" element={<Transition />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
