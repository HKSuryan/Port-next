import "./styles/globals.css"; // Import global styles
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Sidebar />
        {children} {/* This renders the content of the current page */}
        <FooterSection />
      </body>
    </html>
  );
}
