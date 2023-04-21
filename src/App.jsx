import "./App.css";
import { useEffect } from "react";
import Banner from "./component/banner/banner.component";
import Footer from "./component/footer/footer.component";
import Header from "./component/header/header.component";
import Navbar from "./component/navbar/navbar.componet";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
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
