import { MathJax } from "better-react-mathjax";
import Link from "next/link";

export default function Page() {
  return (
    <MathJax>
      <article>
        <header>
          <h2>Set</h2>
        </header>
        <p>A collection of elements (known as members of the set).</p>
        <section>
          <h3>Examples</h3>
          <p>
            The set of{" "}
            <Link href={"/topic/integers"}>integers</Link>, {"`ZZ` = {..., -2, -1, 0 , 1, 2, ...}"}.
          </p>
        </section>
      </article>
    </MathJax>
  );
}
