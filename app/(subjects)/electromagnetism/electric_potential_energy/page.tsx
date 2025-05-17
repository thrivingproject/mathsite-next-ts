import { Electromagnetism, Mechanics } from "@/lib/topics";
import Link from "next/link";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Electric Potential Energy</h2>
      </header>
      <p>
        The amount of <Link href={Mechanics.energy}>energy</Link> a charge in an{" "}
        <Link href={Electromagnetism.electricField}>electric field</Link> has as a result of its
        position in the field and its <Link href={Electromagnetism.charge}>charge</Link>.
      </p>
      <section>
        <h3>See also</h3>
        <p>
          <Link href={Electromagnetism.electricPotentialEnergy}>Electric Potential Energy</Link>
        </p>
      </section>
    </article>
  );
}
