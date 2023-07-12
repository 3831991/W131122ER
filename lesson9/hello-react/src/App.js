import './App.css';
import Counter from './Counter';
import Gallery from './Gallery';

function App() {
  return (
    <div>
      <h1>האתר הראשון בריאקט</h1>

      <div className="frame">
        <Gallery />
        <Counter />
      </div>
    </div>
  );
}

export default App;
