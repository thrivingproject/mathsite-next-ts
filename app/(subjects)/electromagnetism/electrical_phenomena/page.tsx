import Link from "next/link";
import { Electromagnetism } from "@/lib/topics";

export default function Page() {
  return (
    <article>
      <header>
        <h2>Electrical Phenomena</h2>
      </header>
      <table>
        <thead>
          <tr>
            <td>Phenomena</td>
            <td>Symbolic Representation</td>
            <td>Measured in</td>
          </tr>
        </thead>
        <tbody>
          {/* Charge */}
          <tr>
            <td>
              <Link href={Electromagnetism.charge}>Electrical Charge</Link>
            </td>
            <td>{"`q`"}</td>
            <td>
              <i>coulombs, </i>
              {"`(C)`"}
            </td>
          </tr>
          {/* Current */}
          <tr>
            <td>
              <Link href={Electromagnetism.current}>Current</Link>
            </td>
            <td>{"`I, i`"}</td>
            <td>
              <i>Amperes, amps, </i>
              {"`(A)`"}
            </td>
          </tr>
          {/* Voltage */}
          <tr>
            <td>
              <Link href={Electromagnetism.voltage}>Voltage</Link>
            </td>
            <td>{"`V, v`"}</td>
            <td>
              <i>volts, </i>
              {"`(V)`"}
            </td>
          </tr>
          {/* Resistance */}
          <tr>
            <td>
              <Link href={Electromagnetism.resistance}>Resistance</Link>
            </td>
            <td>{"`R`"}</td>
            <td>
              <i>ohms, </i>
              {"`(Omega)`"}
            </td>
          </tr>
        </tbody>
      </table>
      <section>
        <h3>Examples</h3>
        <p></p>
      </section>
    </article>
  );
}
