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
        <h1>All Topics</h1>
        <ul>
          {entries.map(slug => (
            <li key={slug}>
              <Link href={`/topic/${slug}`}>{prettifyDirName(slug)}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

/**
 * Prettifies the directory name to a title-cased label.
 * @param {string} dirName – the directory name
 * @returns {string} – the prettified, title-cased label
 */
function prettifyDirName(dirName) {
  return dirName
    .replace(/_/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
