import './App.css';
import TopBar from '../components/TopBar'
import Home from '../components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logged-in' element={<Home />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
