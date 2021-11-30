import React from 'react';
import styles from "../components/formSection.module.css";

const FormSection = ({

     title = '',

     children,

     }: {

    title?: string;

    children: React.ReactNode;

// children: typeof FormRow[] | typeof FormRow;

}): JSX.Element => {

    return (

        <fieldset className={styles.fieldset}>
            {title ? <legend>{title}</legend>
                : ''}
            {children}
        </fieldset>
    );

};
export default FormSection;