import { MathJax } from "better-react-mathjax";
import Link from "next/link";

export default function Page() {
  return (
    <MathJax>
      <article>
        <header>
          <h2>Negative numbers</h2>
        </header>
        <p>
          Any number less than 0.
        </p>
        <section>
          <h3>Examples</h3>
          <p></p>
        </section>
      </article>
    </MathJax>
  );
}