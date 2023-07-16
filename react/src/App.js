import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <h1>האתר הראשון בריאקט</h1>

      <div className="frame">
        <Navbar />

        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
