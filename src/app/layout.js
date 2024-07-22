import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { ThemeContextProvider } from "../context/ThemeContext";
import { ThemeProvider } from "../providers/ThemeProvider";
import AuthProvider from './../providers/AuthProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog app",
  description: "update your knowledge in Coding with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
           <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
