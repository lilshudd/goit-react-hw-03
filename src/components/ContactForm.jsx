import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import "./styles/ContactForm.css";

const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number")
      .required("Phone number is required"),
  });

  return (
    <div className="formContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <div className="fieldGroup">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="input-form"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="fieldGroup">
            <label htmlFor="number" className="label">
              Number:
            </label>
            <Field
              type="text"
              id="number"
              name="number"
              placeholder="Enter your phone number"
              className="input-form"
            />
            <ErrorMessage name="number" component="div" className="error" />
          </div>
          <button type="submit" className="button-form">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
