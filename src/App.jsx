import { Outlet } from "react-router-dom";
import Nav from "./component/nav";
import Hero from "./component/Hero";
import PopularBookList from "./component/PopularBookList";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Nav />
      <Outlet/>
      <Footer/>
      {/* <Hero /> */}
      {/* <PopularBookList /> */}
    </>
  );
}

export default App;
