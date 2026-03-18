import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FormWizard } from '../components/FormWizard'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormWizard />} />
      </Routes>
    </BrowserRouter>
  )
}
