import Link from "next/link";
import { MathTopic } from "../../../../lib/topics";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Subset</h2>
      </header>
      <p>
        A <Link href={MathTopic.getPath("set")}>set</Link> consisting entirely of elements that are
        members of another <Link href={MathTopic.getPath("set")}>set</Link>. The mathematical
        symbol for subset is {"`sube`"}.
      </p>
      <section>
        <h3>Example</h3>
        <p>
          If {"`A = {0,1}`"} and {"`B = {0,1,2}`"} are sets, then `A sube B`, because {"`B`"}{" "}
          contains every element in {"`A`"}.
        </p>
      </section>
    </article>
  );
}
