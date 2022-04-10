import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<HomePage/> }/>
				{/* <Route path="/*" element={<h1>404</h1>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
