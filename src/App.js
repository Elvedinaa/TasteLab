import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import SignUp from './pages/SignUp';  // Import SignUp

function App() {
  return (
    <Router>
      <div className="bg-white-400 min-h-screen flex flex-col">
        <main className="flex-grow flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/signup" element={<SignUp />} />  {/* Add route for SignUp */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
