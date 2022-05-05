import React from 'react';
import {useFormik} from 'formik';
import styles from './Contacts.module.css';
import containerStyle from '../common/styles/Container.module.css';


export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            input1: '',
            input2: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    });


    return (
        <div className={styles.contactsBlock}>

            <form className={`${containerStyle.container} ${styles.contactsContainer}`} onSubmit={formik.handleSubmit}>
                <label htmlFor="contacts">Contacts</label>
                <input
                    type="text"
                    {...formik.getFieldProps('input1')}
                />

                <input
                    type="text"
                    {...formik.getFieldProps('input2')}
                />
                <textarea

                    {...formik.getFieldProps('textarea')}
                />
                <div className={styles.button}>
                <button type="submit">Submit</button>
                </div>
            </form>


        </div>

    );
};

export default Contacts;