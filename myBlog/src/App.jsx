import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./components/blog-page/BlogPage";
import Layout from "./components/layout/Layout";
import BlogBody from "./components/blog-body/BlogBody";
import ContactPage from "./components/contactus/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BlogBody />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />{" "}
          {/* Add the route for the Contact Page */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
