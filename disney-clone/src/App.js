import './App.css';
// adding a router to go back between pages without having to refresh
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
