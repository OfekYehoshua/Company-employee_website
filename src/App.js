import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Archive from './pages/Archive/Archive';
import SignUp from './pages/register/SignUp';
import LogIn from './pages/register/LogIn';
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
