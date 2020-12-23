import AboutUs from "./Pages/AboutUs.js";
import OurWork from "./Pages/OurWork.js";
import ContactUs from "./Pages/ContactUs.js";
import Nav from "./Components/Nav";
// Global Style
import GlobalStyle from "./Components/GlobalStyle";
// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
