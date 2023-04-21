import "./App.css";
import Banner from "./component/banner/banner.component";
import Footer from "./component/footer/footer.component";
import Header from "./component/header/header.component";
import Navbar from "./component/navbar/navbar.componet";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <div className="App-grid">
          <Banner />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
