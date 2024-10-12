import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import { TypeProvider } from './components/TypeProvider.jsx'



function App() {
  return (
    <TypeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/*creating route for the home page */}
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </TypeProvider>
  )
}

export default App
