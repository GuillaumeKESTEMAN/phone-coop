import React from 'react';

const FormRow = ({

     label,

     children,

     errorMessages,

     }: {

    label: string;

    children: JSX.Element;

    errorMessages: string[];

}): JSX.Element => {

    return (

        <div>
            <p>
                <label>

                    {label}&nbsp;:

                    <br />

                    {children}

                </label>
            </p>

            {errorMessages.length ? (

                <p className="error"> {errorMessages[0]
                || 'Erreur inconnue.'}</p>

            ) : null}
        </div>
    );
};

export default FormRow;