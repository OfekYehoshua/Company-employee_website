import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Archive from './pages/Archive/Archive';
import SignUp from './pages/register/SignUp';
import LogIn from './pages/register/LogIn';
import { useSelector } from 'react-redux';
import { selectUser } from './ProfileSlice';


function App() {
  const user = useSelector(selectUser)

  if (user.password == "" || user.email == ""){
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/profile" element={<LogIn/>} />
        <Route path="/archive" element={<LogIn/>} />
      </Routes>
    </div>
  )} else{
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
  )}
}

export default App;
