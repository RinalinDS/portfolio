import React from 'react';
import { useFormik } from 'formik';
import styles from './Contacts.module.scss';
import { Title } from '../../common/components/title/Title';
import { Fade } from 'react-awesome-reveal';


export const Contacts = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: values => {
      alert('Sorry, this feature is currently in progress , can you please use links from \'Socials\' ?');
    },
  });


  return (
    <Fade>
      <div className={styles.contactsBlock} id={'contacts'}>
        <div className={styles.container}>
          <Title text={'Contacts'} />
          <Fade direction={'left'}>
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
          </Fade>
        </div>
      </div>
    </Fade>

  );
};
