import React from 'react';
import {useFormik} from 'formik';
import styles from './Contacts.module.scss';
import {Title} from '../common/components/title/Title';


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
      <div className={styles.container}>
        <Title text={'Contacts'}/>
        <form className={styles.form} onSubmit={formik.handleSubmit}>

          <input
            className={styles.formArea}
            type="text"
            placeholder={'Name'}
            {...formik.getFieldProps('name')}
          />

          <input
            className={styles.formArea}
            type="text"
            placeholder={'E-mail'}
            {...formik.getFieldProps('email')}
          />
          <textarea
            placeholder={'Message'}
            className={styles.messageArea}
            {...formik.getFieldProps('message')}
          />

          <button type="submit" className={styles.submit_btn}>Submit</button>

        </form>
      </div>
    </div>

  );
};

export default Contacts;