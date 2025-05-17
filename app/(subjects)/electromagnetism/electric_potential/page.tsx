import Link from "next/link";
import { Electromagnetism, Mechanics } from "@/lib/topics";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Electric Potential</h2>
      </header>
      <p>
        The amount of{" "}
        <Link href={Electromagnetism.electricPotentialEnergy}>electric potential energy</Link> one
        coulomb of <Link href={Electromagnetism.testCharge}>test charge</Link> would have (relative
        to ground) were it placed in an{" "}
        <Link href={Electromagnetism.electricField}>electric field</Link>. Equivalently, it is the{" "}
        <Link href={Mechanics.work}>work</Link> that would be required per coulomb of{" "}
        <Link href={Electromagnetism.testCharge}>test charge</Link> to place the{" "}
        <Link href={Electromagnetism.testCharge}>test charge</Link> at that point. It is measured
        in joules per coulomb (volts).
      </p>
    </article>
  );
}
