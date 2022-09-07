import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Archive from './pages/Archive';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/archive" element={<Archive/>} />
      </Routes>
    </div>
  );
}

export default App;
