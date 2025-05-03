import Link from "next/link";

export default function Page() {
  return (
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
        <Link href={"/math/addition"}>addition</Link>
        <br />
        <Link href={"/math/additive_inverse"}>additive inverse</Link>
      </section>
    </article>
  );
}
