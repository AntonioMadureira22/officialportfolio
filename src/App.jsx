import Navbar from './components/navbar/navbar';
import Intro from "./components/intro/intro";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
