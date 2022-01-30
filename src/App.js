import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import ShareYourStoryForm from "./component/ShareYourStoryForm";
import Success from "./component/Success";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
