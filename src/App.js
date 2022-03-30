import "./App.css";
import styles from "./style";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";

function App() {
  const classes = styles();
  return (
    <div className={classes.app}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
