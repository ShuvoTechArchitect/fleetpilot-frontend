import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to FleetPilot</h1>} />
      {/* ভবিষ্যতে আরও Route যোগ করতে পারবে */}
    </Routes>
  );
}

export default App;
