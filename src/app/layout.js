import "./styles/globals.css";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
