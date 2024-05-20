import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Pages/About'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {
  return <div className="App">
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<Signup/>} />


      </Routes>
    </Router>
  </div>;
}

export default App;
