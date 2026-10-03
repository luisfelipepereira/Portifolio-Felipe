import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../ui/BackToTop";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
