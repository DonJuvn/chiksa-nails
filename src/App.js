import About from "./components/about";import Appointment from "./components/appointment";
import BestWorks from "./components/best-works";
import CallToAction from "./components/call-to-action";
import Certificates from "./components/certificates";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Masters from "./components/masters";

import "./App.css";
import MyComponent from "./components/get-masters";

function App() {
   return (
      <div className="App">
         <Header />
         <About />
         <CallToAction />
         <Features />
         <Masters />
         <BestWorks />
         <Certificates />
         <Appointment />
         <Footer />
         {/* <MyComponent /> */}
      </div>
   );
}

export default App;
