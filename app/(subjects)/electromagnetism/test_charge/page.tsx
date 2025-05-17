import { Electromagnetism } from "@/lib/topics";
import Link from "next/link";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Test Charge</h2>
      </header>
      <p>
        A hypothetical charge used to measure the{" "}
        <Link href={Electromagnetism.electricField}>electric field</Link>. It is assumed to be
        small enough that it does not affect the field it is placed in. The test charge is usually
        taken to be positive.
      </p>
      <section>
        <h3>Examples</h3>
        <p></p>
      </section>
    </article>
  );
}
