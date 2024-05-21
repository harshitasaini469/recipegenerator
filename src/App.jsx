import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Recipe from "./Pages/Recipe";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/recipe" element={<Recipe />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
