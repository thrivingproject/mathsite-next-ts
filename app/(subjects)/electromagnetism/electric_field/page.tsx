import { Electromagnetism, Mechanics } from "@/lib/topics";
import Link from "next/link";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Electric Field</h2>
        <p>
          A field that surrounds one or more <Link href={Electromagnetism.charge}>charged</Link>{" "}
          particles that associates each point in the field with the electric{" "}
          <Link href={Mechanics.force}>force</Link> that one{" "}
          <Link href={Electromagnetism.charge}>coulomb</Link> of{" "}
          <Link href={Electromagnetism.testCharge}>test charge</Link> would experience if placed at
          that point.
        </p>
      </header>
      <p></p>
      <section>
        <h3>See also</h3>
        <p>
          <Link href={Electromagnetism.electricPotential}>Electric potential</Link>
        </p>
      </section>
    </article>
  );
}
