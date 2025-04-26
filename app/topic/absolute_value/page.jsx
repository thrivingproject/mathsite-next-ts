import { MathJax } from "better-react-mathjax";
import Link from "next/link";

export default function Page() {
  return (
    <MathJax>
      <article>
        <header>
          <h2>Absolute value</h2>
        </header>
        <p>
          The absolute value of a number is its magnitude whatever the sign. The absolute value of
          a number is denoted by surrounding the number in vertical bars {"`| \\quad |`"}. In
          coding applications it is typically denoted <i>abs()</i>.
        </p>
        <section>
          <h3>Examples</h3>
          <p>{"`abs(100) = 100`"}</p>
          <p>{"`abs(-5) = 5`"}</p>
          <p>{"`abs(-3) = abs(3) = 3`"}</p>
          <p>
            <i>abs</i>
            {"`(7) =7`"}
          </p>
          <p>
            <i>abs</i>
            {"`(-1.5) = 1.5`"}
          </p>
        </section>
      </article>
    </MathJax>
  );
}
