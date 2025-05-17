import Link from "next/link";
import { Mechanics } from "@/lib/topics";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Energy</h2>
      </header>
      <p>
        The ability to do <Link href={Mechanics.work}>work</Link>. Measured in joules. Energy is
        converted from one form to another through <Link href={Mechanics.work}>work</Link>.
      </p>
    </article>
  );
}
