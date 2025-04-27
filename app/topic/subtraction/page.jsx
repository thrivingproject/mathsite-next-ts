import { MathJax } from "better-react-mathjax";
import Link from "next/link";

export default function Page() {
  return (
    <MathJax>
      <article>
        <header>
          <h2>Subtraction</h2>
        </header>
        <p>A binary operation denoted by the symbol {"`-`"}.</p>
        <section>
          <h3>Examples</h3>
          <p></p>
        </section>
        <section>
          <h4>See also</h4>
          <Link href={"/topic/addition"}>addition</Link>
          <br />
          <Link href={"/topic/additive_inverse"}>additive inverse</Link>
        </section>
      </article>
    </MathJax>
  );
}
