import Link from "next/link";
import { Electromagnetism, Mechanics } from "@/lib/topics";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Electrical Charge</h2>
      </header>
      <p>
        A property of matter that causes objects to feel and exert an electric{" "}
        <Link href={Mechanics.force}>force</Link>. It is measured in coulombs. It can be positive
        or negative, where objects with same-signed charge repel each other, while objects with
        opposite-signed charge attract one other. The force between two charged objects is
        proportional to the product of their magnitudes and inversely proportional to the square of
        the distance between them.
      </p>
      <section>
        <h4>Example</h4>
        <p>{"`q = 7 C`"}</p>
      </section>
      <section>
        <h4>See also</h4>
        <Link href={Electromagnetism.elementaryCharge}>Elementary Charge</Link>
      </section>
    </article>
  );
}
