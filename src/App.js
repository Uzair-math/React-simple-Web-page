import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Test from './pages/Test';
import RunsListView from './components/RunsListView';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Test" element={<Test />} />
          <Route path='/runs' element={<RunsListView />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;