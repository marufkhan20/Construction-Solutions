import Header from "@/components/shared/Header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mt-[80px]">{children}</div>
      </body>
    </html>
  );
}
