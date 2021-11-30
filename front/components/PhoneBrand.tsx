import React, { ForwardedRef, InputHTMLAttributes } from "react";
import styles from "../components/PhoneBrand.module.css";

const PhoneBrand = React.forwardRef(
  (
    props: InputHTMLAttributes<HTMLSelectElement>,
    ref?: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <select
        ref={ref}
        name="brand"
        id="brand-select"
        className={styles.select}
        {...props}
      >
        <option value=""> --Please choose a brand--</option>
        <option value="Fairphone"> Fairphone </option>
        <option value="Wiko"> Wiko </option>
        <option value="Samsung"> Samsung </option>
        <option value="Apple"> Apple </option>
        <option value="Huawei"> Huawei </option>
        <option value="Xiaomi"> Xiaomi </option>
        <option value="OnePlus"> OnePlus </option>
        <option value="Other"> Other </option>
      </select>
    );
  }
);

PhoneBrand.displayName = "PhoneBrand";

export default PhoneBrand;
