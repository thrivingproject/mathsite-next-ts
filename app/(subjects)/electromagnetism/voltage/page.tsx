import Link from "next/link";
import { Electromagnetism, Mechanics } from "@/lib/topics";

export default function Page() {
  return (
    <article>
      <header>
        <h2>
          Voltage (<Link href={Electromagnetism.electricPotential}>Electric Potential</Link>{" "}
          Difference)
        </h2>
      </header>
      <p>
        The difference in <Link href={Electromagnetism.electricPotential}>electric potential</Link>{" "}
        between two points. Equivalently, it is the amount of electric potential{" "}
        <Link href={Mechanics.energy}>energy</Link> gained or lost by an object whose{" "}
        <Link href={Electromagnetism.charge}>charge</Link> is {"`1`"} coulomb when the object is
        moved from one point to another in a circuit. Its unit is the volt {"`(V)`"}, which is{" "}
        {"`1`"} joule per coulomb.
      </p>
      <section>
        <h3>Examples</h3>
        <p>
          The voltages at the positive and negative terminals of a {"`9V`"} battery differ by{" "}
          {"`9`"} volts. When one coulomb of charge flows from the positive to the negative
          terminal, it loses 9 joules of energy into the circuit.
        </p>
        <p>
          A multimeter measure voltage with two probes, and this fact is helpful, because it
          illustrates that voltage is a measurement that involves <i>two</i> points.
        </p>
      </section>
      <section>
        <h3>See also</h3>
        <p>
          <Link href={Electromagnetism.ohmsLaw}>Ohm&apos;s Law</Link>
        </p>
      </section>
    </article>
  );
}
