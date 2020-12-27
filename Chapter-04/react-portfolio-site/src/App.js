import AboutUs from "./Pages/AboutUs.js";
import OurWork from "./Pages/OurWork.js";
import ContactUs from "./Pages/ContactUs.js";
import Nav from "./Components/Nav";
import MovieDetails from "./Pages/MovieDetails";
// Global Style
import GlobalStyle from "./Components/GlobalStyle";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        // Location and key are for page animations
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
