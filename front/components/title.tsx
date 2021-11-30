import styles from "../components/title.module.css";

export default function Title({
  children,
  level,
}: {
  children: React.ReactNode;
  level: 1 | 2 | 3;
}) {
  return level === 1 ? (
    <h1 className={styles.h1}>
      {children}
    </h1>
  ) : level === 2 ? (
    <h2 className={styles.h2}>
      {children}
    </h2>
  ) : (
    <h3 className={styles.h3}>
      {children}
    </h3>
  );
}
