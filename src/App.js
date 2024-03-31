import About from "./components/about";
import Appointment from "./components/appointment";
import BestWorks from "./components/best-works";
import CallToAction from "./components/call-to-action";
import Certificates from "./components/certificates";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Masters from "./components/masters";

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Appointment />
      <BestWorks />
      <CallToAction />
      <Features />
      <Certificates />
      <Masters />
      <Footer />
    </div>
  );
}

export default App;
