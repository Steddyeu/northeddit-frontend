import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
    <Header />
    <Router>
        <Nav path ='/topics'/>

    </Router>
    </div>
  );
}

export default App;
