import "./globals.css";
import { MathJaxContext } from "better-react-mathjax";

export const metadata = {
  title: "Math",
  description: "Math site with math topics",
};

const config = {
  loader: { load: ["input/asciimath"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MathJaxContext config={config}>
        <body>{children}</body>
      </MathJaxContext>
    </html>
  );
}
