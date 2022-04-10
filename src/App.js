import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './components/pages/HomePage';
import AppMain from './components/layout/AppMain';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<HomePage/> }/>
				<Route path="/*" element={<AppMain/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
