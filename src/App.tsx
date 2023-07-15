import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import TodoPages from './Pages/TodoPages/TodoPages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/todopages" element={<TodoPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
