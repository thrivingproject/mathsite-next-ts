import styles from "./page.module.css";
import { SUBJECT_TOPIC_MAPPING, titleCase } from "../lib/util";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {Object.entries(SUBJECT_TOPIC_MAPPING).map(([subject, topics]) => (
          <section key={subject}>
            <h2>{titleCase(subject)}</h2>
            <ul>
              {topics.map(topic => (
                <li key={topic}>
                  <Link href={`/${subject}/${topic}`}>{titleCase(topic)}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}
