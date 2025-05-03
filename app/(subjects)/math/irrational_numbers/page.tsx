import Link from "next/link";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Irrational numbers</h2>
      </header>
      <p>
        Any number that cannot be expressed as the ratio of two{" "}
        <Link href={`/math/integers`}>integers</Link>. Numbers that have nonterminating decimals
        which do not repeat a pattern are irrational.
      </p>
      <section>
        <h3>Examples</h3>
        <p>{"`pi = 3.14159...`"}</p>
        <p>{"`sqrt 2 = 1.41421...`"}</p>
      </section>
    </article>
  );
}
