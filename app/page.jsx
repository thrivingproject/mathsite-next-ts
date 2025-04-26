import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Home() {
  const wikiDir = path.join(process.cwd(), "app", "topic");
  const entries = fs
    .readdirSync(wikiDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && fs.existsSync(path.join(wikiDir, d.name, "page.jsx")))
    .map(d => d.name);

  return (
    <div>
      <main>
        <h1>All Entries</h1>
        <ul>
          {entries.map(slug => (
            <li key={slug}>
              <Link href={`/topic/${slug}`}>{slug.replace(/-/g, " ")}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
