import { type JSX } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from './pages/Login';
import Filmes from './pages/Filmes';
import CadastrarFilme from './pages/CadastrarFilme';
import EditarFilme from './pages/EditarFilme';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
}


function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/filmes"
            element={
              <PrivateRoute>
                <Filmes />
              </PrivateRoute>
            }
          />
          <Route 
            path="/cadastrar"
            element={
              <PrivateRoute>
                <CadastrarFilme />
              </PrivateRoute>
            }
          />
          <Route
            path="/editar/:id"
            element={
              <PrivateRoute>
                <EditarFilme/>
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
  
}

export default App
