import './App.css';
import NavBar from './components/NavBar.jsx';
import BestPrice from './components/BestPrice.jsx';
import About from './components/About.jsx';
import Price from './components/Price.jsx';
import Ring from './components/Ring.jsx';


function App() {
  return (
    <div className="App">
    <NavBar />
    <BestPrice />
    <About />
    <Price />
    <Ring />
    </div>
  );
}

export default App;
