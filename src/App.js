import Login from './components/Login';
import Landingpage from './components/Landingpage';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/landingpage' element={<Landingpage />}/>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
