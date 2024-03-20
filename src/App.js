import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import Blog from "./components/Blog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/'  element={<Home/>} />
        <Route path = '/about'  element={<About/>} />
        <Route path = '/contents'  element={<Contents/>} />
        <Route path = '/blog'  element={<Blog/>} />
        <Route path = '/contact'  element={<Contact/>} />

      </Routes>
    </>
  );
}

export default App;