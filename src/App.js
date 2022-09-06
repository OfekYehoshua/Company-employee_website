import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Archive from './pages/Archive';
import ActionBarComponentProps from './components/calander';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="register" element={<Register/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="archive" element={<Archive/>} />
      </Routes>
    </div>
  );
}

export default App;
