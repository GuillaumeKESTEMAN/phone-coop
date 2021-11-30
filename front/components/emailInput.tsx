import styles from "../components/Input.module.css";

export default function emailInput({children,}: {children: React.ReactNode;}) {
  return <input type="text" id="email" className="{style.input}" >Entrer your email</input>
}

