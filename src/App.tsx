import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './routes/AppRouter';
import Header from './components/Header/Header';
// import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <AppRouter/>
  );
}

export default App;
