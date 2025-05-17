import Link from "next/link";
import { Electromagnetism } from "@/lib/topics";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Elementary Charge</h2>
      </header>
      <p>
        A constant, {"`e`"}, representing the magnitude of{" "}
        <Link href={Electromagnetism.charge}>electric charge</Link> carried by a single proton{" "}
        {"`(e)`"} or a single electron {"`(-e)`"}. Its{" "}
        <Link href={Electromagnetism.charge}>charge</Link> is {"`1.602176634 xx 10^-19`"}{" "}
        <Link href={Electromagnetism.charge}>coulombs</Link>. The amount of elementary charges
        needed to amount to {"`1`"} <Link href={Electromagnetism.charge}>coulomb</Link> is{" "}
        {"`6.241509 xx 10^18`"}.
      </p>
    </article>
  );
}
