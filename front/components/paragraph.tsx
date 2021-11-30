import styles from "../components/paragraph.module.css";

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className={styles.p}>{children}</p>;
}
