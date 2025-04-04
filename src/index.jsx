import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import Todo from "./components/Todo/Todo.jsx"
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Navigate to={"/to-do-list"} />}>
        </Route>
        <Route
          path='/to-do-list'
          element={<App />}>
        </Route>
        <Route
          path='*'
          element={<p>Not found</p>}>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>,
)
