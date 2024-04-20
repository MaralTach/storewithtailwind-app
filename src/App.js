
import './App.css';
import AppRouter from './router/AppRouter';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Products from './pages/Products';
// import About from './pages/About';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <AppRouter/>
  {/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/products" element={<Products />}/>
    <Route path="/about" element={<About />}/>
    <Route path="*" element={<NotFound />}/>
  </Routes>
  
  </BrowserRouter> */}


    
    </div>
  );
}

export default App;
