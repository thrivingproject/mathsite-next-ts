import { MathJax } from "better-react-mathjax";
import Link from "next/link";

export default function Page() {
  return (
    <MathJax>
      <article>
        <header>
          <h2>Real numbers</h2>
        </header>
        <p>
          The <Link href={"/topic/set_union"}>set union</Link> of the{" "}
          <Link href={"/topic/set"}>set</Link> of{" "}
          <Link href={"/topic/irrational_numbers"}>irrational numbers</Link> and the{" "}
          <Link href={"/topic/set"}>set</Link> of{" "}
          <Link href={"/topic/rational_numbers"}>rational numbers</Link>.
        </p>
        <section>
          <h3>Examples</h3>
          <p></p>
        </section>
      </article>
    </MathJax>
  );
}
