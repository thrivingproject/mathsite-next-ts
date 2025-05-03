import Nav from "@/components/Nav";
import { MathJax } from "better-react-mathjax";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <main>
        <MathJax>{children}</MathJax>
      </main>
    </>
  );
}
