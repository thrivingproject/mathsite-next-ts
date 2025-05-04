import Link from "next/link";
import { MathTopic } from "../../../../lib/topics";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Real numbers</h2>
      </header>
      <p>
        The <Link href={MathTopic.getPath("setUnion")}>union</Link> of the{" "}
        <Link href={MathTopic.getPath("set")}>set</Link> of{" "}
        <Link href={MathTopic.getPath("irrationalNumbers")}>irrational numbers</Link> and the{" "}
        <Link href={MathTopic.getPath("set")}>set</Link> of{" "}
        <Link href={MathTopic.getPath("rationalNumbers")}>rational numbers</Link>.
      </p>
      <section>
        <h3>Properties</h3>
        <p>{"`\\text{positive number} + \\text{positive number} = \\text{positive number }`"}</p>
        <p>{"`\\text{negative number} - \\text{negative number} = \\text{negative number}`"}</p>
      </section>
    </article>
  );
}
