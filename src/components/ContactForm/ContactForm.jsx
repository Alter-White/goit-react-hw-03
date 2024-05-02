import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => (
  <Formik
    initialValues={{ name: "", number: "" }}
    validationSchema={Yup.object({
      name: Yup.string()
        .required("Required")
        .min(3, "Too Short!")
        .max(50, "Too Long!"),
      number: Yup.string()
        .required("Required")
        .min(3, "Too Short!")
        .max(50, "Too Long!"),
    })}
    onSubmit={(values, actions) => {
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      });
      actions.resetForm();
    }}
  >
    <Form>
      <div className={css.formContainer}>
        <div className={css.formAddContact}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className={css.formAddContact}>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button className={css.formButton} type="submit">
          Add Contact
        </button>
      </div>
    </Form>
  </Formik>
);

export default ContactForm;
