import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Mypage from './Pages/Mypage';
import Signup from './Pages/Signup';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/mypage" element={<Mypage />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
        </Routes>
    );
}

export default App;