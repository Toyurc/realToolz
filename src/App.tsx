import './App.css';
import 'normalize.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import Dashboard from 'pages/Dashboard';
import { Container } from 'components/Container/index.styles';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Container>
  );
}

export default App;
