import { MathJax } from "better-react-mathjax";
import Link from "next/link";

export default function Page() {
  return (
    <MathJax>
      <article>
        <header>
          <h2>Addition</h2>
        </header>
        <p>
          A binary operation denoted by the symbol {"`+`"}. The result of adding one number to
          another is called a sum. Adding a negative number is the same as{" "}
          <Link href={"/topic/subtraction"}>subtracting</Link> it.
        </p>
        <section>
          <h3>Properties</h3>
          <table>
            <tbody>
              <tr>
                <td>Commutative property</td>
                <td>{"`a + b = b + a`"}</td>
              </tr>
              <tr>
                <td>Additive identity property</td>
                <td>{"`a + 0 = a`"}</td>
              </tr>
              <tr>
                <td>Associative property</td>
                <td>{"`(a + b) + c = a + (b + c)`"}</td>
              </tr>
              <tr>
                <td>Additive inverse property</td>
                <td>{"`a + (-a) = 0`"}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Examples</h3>
          <p>{"`5 + (-3) = 2`"}</p>
          <p>
            The sum of {"`7`"} and {"`9`"} is {"`16`"}.
          </p>
          <p>{"`11 + 19 = 19 + 11 = 30`"}</p>
        </section>
        <section>
          <h4>See also</h4>
          <Link href={'/topic/additive_inverse'}>additive inverse</Link>
          <br />
          <Link href={'/topic/subtraction'}>subtraction</Link>
        </section>
      </article>
    </MathJax>
  );
}
