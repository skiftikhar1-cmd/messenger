import "./globals.css";

export const metadata = {
  title: "CST NEW 3rd",
  description: "Private messaging for CST Batch 2028",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}