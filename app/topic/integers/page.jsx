import { MathJax } from "better-react-mathjax";
import Link from "next/link";

export default function Page() {
  return (
    <MathJax>
      <article>
        <header>
          <h2>Integers</h2>
        </header>
        <p>
          The <Link href={"/topic/set/"}>set</Link> of positive and negative whole numbers
          including 0. The symbol for the <Link href={"/topic/set"}>set</Link> of integers is{" "}
          {"`ZZ`"}. It is a <Link href={"/topic/subset"}>subset</Link> of the{" "}
          <Link href={"/topic/set"}>set</Link> of{" "}
          <Link href={"/topic/rational_numbers"}>rational numbers</Link> rational numbers {"`QQ`"}.
        </p>
        <section>
          <h3>Examples</h3>
          <p>{"`ZZ` = {..., -2, -1, 0 , 1, 2, ...}"}</p>
        </section>
      </article>
    </MathJax>
  );
}
