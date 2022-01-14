import Navbar from './components/navbar/navbar';
import Intro from "./components/intro/intro";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import AboutMe from "./components/Aboutme/about";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <AboutMe/>
        <Portfolio/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
