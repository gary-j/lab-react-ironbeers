import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppMain from './components/layout/AppMain';

function App() {
  return (
    <div className='App'>
      <Router>
        <AppMain/>
      </Router>
    </div>
  );
}

export default App;
