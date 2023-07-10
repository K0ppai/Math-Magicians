/** @format */

import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/quote';
import Nav from './components/nav';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/calculator"
          element={<Calculator />}
        />
        <Route
          path="/quote"
          element={<Quote />}
        />
      </Routes>
    </div>
  );
}

export default App;
