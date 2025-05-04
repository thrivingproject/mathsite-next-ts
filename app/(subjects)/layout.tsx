"use client";

import Nav from "@/components/Nav";
import { MathJax } from "better-react-mathjax";
import { usePathname } from "next/navigation";

/**
 * This is a client component so `usePathname()` can be added as a key,
 * which will cause the component to re-render when the pathname changes.
 * This is needed so that MathJax can re-render the math when routing to new page.
 */
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <MathJax key={path}>
      <Nav />
      <main>{children}</main>
    </MathJax>
  );
}
