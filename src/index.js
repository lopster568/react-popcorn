import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './components/move/movie';
import MovieList from './components/MovieList/movie-list';
import Navbar from './components/navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/*' element={<h1>Error</h1>} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movies/:type" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
