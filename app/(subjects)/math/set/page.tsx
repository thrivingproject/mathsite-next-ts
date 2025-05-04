import Link from "next/link";
import { MathTopic } from "../../../../lib/topics";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Set</h2>
      </header>
      <p>A collection of elements (known as members of the set).</p>
      <section>
        <h3>Examples</h3>
        <p>
          The set of <Link href={MathTopic.getPath("integers")}>integers</Link>,{" "}
          {"`ZZ = {..., -2, -1, 0 , 1, 2, ...}`"}.
        </p>
      </section>
    </article>
  );
}
