import React from 'react';
import {useFormik} from 'formik';
import styles from './Contacts.module.css';
import containerStyle from '../common/styles/Container.module.css';


export const Contacts = () => {

  const formik = useFormik({
    initialValues: {
      input1: '',
      input2: '',
      textarea: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  });


  return (
    <div className={styles.contactsBlock}>
      <div className={`${containerStyle.container} ${styles.contactsContainer}`}>
        <h2 className={styles.title}>Contacts</h2>
        <form className={styles.contactForm} onSubmit={formik.handleSubmit}>

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

            <button type="submit" className={styles.submit_btn}>Submit</button>

        </form>


      </div>
    </div>

  );
};

export default Contacts;