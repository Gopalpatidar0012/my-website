import Banner from "@/components/Banner";
import About from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <About />
      <footer role="contentinfo" aria-label="footer" id="cb-footer">
        <Footer />
      </footer>
    </div>
  );
}
