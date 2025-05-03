import Link from "next/link";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Integers</h2>
      </header>
      <p>
        The <Link href={`/math/set`}>set</Link> of positive and negative whole numbers including 0.
        The symbol for the <Link href={`/math/set`}>set</Link> of integers is {"`ZZ`"}. It is a{" "}
        <Link href={`/math/subset`}>subset</Link> of the <Link href={`/math/set`}>set</Link> of{" "}
        <Link href={`/math/rational_numbers`}>rational numbers</Link> {"`QQ`"}.
      </p>
      <section>
        <h3>Examples</h3>
        <p>{"`ZZ = {..., -2, -1, 0 , 1, 2, ...}`"}</p>
      </section>
    </article>
  );
}
