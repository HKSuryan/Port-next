import './styles/globals.css';  // Import global styles
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children} {/* This renders the content of the current page */}
        <FooterSection/>
      </body>
    </html>
  );
}
