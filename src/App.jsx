import Test from "./Test";
import "./app.scss";
import Amen from "./components/amen/Amen";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact"
import Cursor from "./components/cursor/Cursor";



const App = () => {
  return (
    <div>
      <Cursor/>
      <section id="Homepage">
        <Navbar />
        <Amen />
      </section>

      <section id="Services">
        <Parallax type="services" />
      </section>

      <section>
        <Services/>
      </section>

      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />

      


      <section id="Contact">
        <Contact/>

      </section>

      {/* <Test /> */}
      
    </div>
  );
};

export default App;
