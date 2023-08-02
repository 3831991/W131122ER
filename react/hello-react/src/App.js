import './App.css';
import Router from './Router';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <h1>האתר הראשון בריאקט</h1>

      <div className="frame">
        <Navbar />
        <Router />
      </div>
    </div>
  );
}

export default App;
