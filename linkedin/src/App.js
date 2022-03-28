import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <MyFooter />;
    </div>
  );
}

export default App;
