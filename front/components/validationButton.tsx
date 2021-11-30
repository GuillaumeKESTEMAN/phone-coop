import styles from "./validationButton.module.css";

export default function ValidationButton({
  children,
  type = "button",
}: {
  children: React.ReactNode;
  type?: "submit" | "button";
}) {
  return (
      <button className={styles.button} type={type}>{children}</button>
  );
}
