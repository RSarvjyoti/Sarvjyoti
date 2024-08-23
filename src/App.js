import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {

  const [theme] = useTheme()

  return (
    <>
    <div id={theme}>
      <MobileNav />
      <Layout />
      <div className="container">
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
      <Tada>
      <div className="footer pb-3 ms-3">
        <h4 className="text-center">@Sarvjyoti ✌ &copy; 2024</h4>
      </div>
      </Tada>
      </div>
      <ScrollToTop smooth color="#fff" style={{backgroundColor:'#ffa116', borderRadius:'50%'}}/>
    </>
  );
}

export default App;
