import Nav from "./components/Nav";
import Home from "./components/Home";
import Headroom from "react-headroom";
function App() {
  return (
    <>
      <Headroom>
        <Nav />
      </Headroom>
      <Home />
    </>
  );
}

export default App;
