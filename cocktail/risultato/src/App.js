import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import ContactScreen from "./screen/ContactScreen";
import SingleCocktailScreen from "./screen/SingleCocktailScreen";

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/contattaci" component={ContactScreen} />
        <Route path="/cocktail/:id" component={SingleCocktailScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;