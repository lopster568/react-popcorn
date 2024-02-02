import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList/movie-list';
import Navbar from './components/navbar/Navbar';
import './index.css';
import Home from './pages/home/home';
import MoviePage from './pages/movie/movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/*' element={<h1>Error</h1>} />
        <Route path="movie/:id" element={<MoviePage />} />
        <Route path="movies/:type" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);