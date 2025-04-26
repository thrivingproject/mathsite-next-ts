import { MathJax } from "better-react-mathjax";
import Link from "next/link";

export default function Page() {
  return (
    <MathJax>
      <article>
        <header>
          <h2>Rational numbers</h2>
        </header>
        <p>
          A number of the form {"`a/b`"} where {"`a`"} and {"`b`"} are{" "}
          <Link href={"/topic/integers"}>integers</Link> and {"`b != 0`"}. Numbers that have a
          repeating decimal pattern are also rational.
        </p>
        <section>
          <h3>Examples</h3>
          <p>{"`1/2 = 0.5`"}</p>
          <p>{"`1/3 = 0.bar 333`"}</p>
          <p>{'`1/7 = 0.bar 142857 = 0.142857142857...`'}</p>
        </section>
      </article>
    </MathJax>
  );
}
