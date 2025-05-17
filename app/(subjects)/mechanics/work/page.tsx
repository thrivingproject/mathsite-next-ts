import { Mechanics } from "@/lib/topics";
import Link from "next/link";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Work</h2>
      </header>
      <p>
        The transfer of <Link href={Mechanics.energy}>energy</Link> from one object to another
        through <Link href={Mechanics.force}>force</Link>. It is equal to the product of the force
        applied to an object and the distance moved by the object.
      </p>
    </article>
  );
}
