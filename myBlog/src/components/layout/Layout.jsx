import Footer from "../footer/Footer";
import NavbarTop from "../navbar/NavbarTop";

const Layout = ({ children }) => (
  <div className="d-flex flex-column min-vh-100">
    <NavbarTop />
    <main className="flex-grow-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
