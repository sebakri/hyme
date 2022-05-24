import { Route, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<p class="text-4xl text-green-700 text-center py-20">Home</p>} />
        <Route path="/about" element={<div>This site was made with Solid</div>} />
      </Routes>
    </>
  );
};

export default App;
