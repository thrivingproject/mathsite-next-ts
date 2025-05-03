import Link from "next/link";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Real numbers</h2>
      </header>
      <p>
        The <Link href={`/math/set_union`}>union</Link> of the <Link href={`/math/set`}>set</Link>{" "}
        of <Link href={"/math/irrational_numbers"}>irrational numbers</Link> and the{" "}
        <Link href={"/math/set"}>set</Link> of{" "}
        <Link href={"/math/rational_numbers"}>rational numbers</Link>.
      </p>
      <section>
        <h3>Properties</h3>
        <p>{"`\\text{positive number} + \\text{positive number} = \\text{positive number }`"}</p>
        <p>{"`\\text{negative number} - \\text{negative number} = \\text{negative number}`"}</p>
      </section>
    </article>
  );
}
