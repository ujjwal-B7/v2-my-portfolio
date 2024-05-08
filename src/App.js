import { useEffect } from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "dcb165ba-8a64-4052-8cde-398123052431";
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = 1;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
