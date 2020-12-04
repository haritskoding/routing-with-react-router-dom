import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import {
  BrowserRouter as Teguh,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Teguh>
      <div className="App">
        <Navbar title="youtube" />
        <Route exact path="/" component={HomePage} />
        <Route  path="/about" component={AboutPage} />
        <Route  path="/contact" component={ContactPage} />
      </div>
    </Teguh>

  );
}

export default App;
