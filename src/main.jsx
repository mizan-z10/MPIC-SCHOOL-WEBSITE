import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import VerifyCertificate from './components/verify_certificate.jsx'
import InputVerify from './components/Input_verify.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <VerifyCertificate/> */}
    {/* <InputVerify/> */}
    
  </StrictMode>,
)
