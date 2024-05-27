import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import ViajeAMedida from './components/ViajeAMedida.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <ViajeAMedida />
    <Footer />
  </React.StrictMode>,
)
