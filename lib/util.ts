import fs from "fs";
import path from "path";

const SUBJECTS_DIR = path.join(process.cwd(), "app", "(subjects)");

/**
 * Mapping of topics to subjects.
 */
export const SUBJECT_TOPIC_MAPPING: { [subject: string]: string[] } = Object.fromEntries(
    fs
        .readdirSync(SUBJECTS_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(subjectDir => [
            subjectDir.name,
            fs
                .readdirSync(path.join(SUBJECTS_DIR, subjectDir.name), {
                    withFileTypes: true,
                })
                .filter(dirent => dirent.isDirectory())
                .map(topicDir => topicDir.name),
        ])
);

/**
 * Removes underscores and adds title case to string.
 * Eg., `irrational_numbers` becomes `Irrational Numbers`.
 * @param str - The string to prettify
 */
export function titleCase(str: string) {
    return str
        .replace(/_/g, " ")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}
