import styles from "../components/PhoneBrand.module.css";

export default function PhoneBrand({ children }: { children: React.ReactNode }) {

    return <select name="brand" id="brand-select" className={styles.select}>
        <option value=""> --Please choose a brand--
        </option>
        <option value="Fairphone"> Fairphone </option>
        <option value="Wiko"> Wiko </option>
        <option value="Samsung"> Samsung </option>
        <option value="Apple"> Apple </option>
        <option value="Huawei"> Huawei </option>
        <option value="Xiaomi"> Xiaomi </option>
        <option value="OnePlus"> OnePlus </option>
        <option value="Other"> Other </option>
    </select>

}
