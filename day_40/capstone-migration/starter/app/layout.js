import "./globals.css";
import Providers from "@/components/Providers"; // client file holding your own providers
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export const metadata = { title: "My Capstone", description: "TODO" };

// Server component. Move your old <App /> shell here (header, nav, footer).
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
