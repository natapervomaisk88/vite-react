import { useFormik } from "formik";
import * as yup from "yup";

const schemaValidate = yup.object({
  name: yup.string().required("Name is empty"),
  email: yup.string().email("Ivalid email").required("Email is empty"),
});

const validate = (values: any) => {
  const errors = { name: "", email: "" };
  if (!values.name) {
    errors.name = "Required (no name)";
  }
  if (!values.email) {
    errors.email = "Required (no email)";
  }
  return errors;
};
const initialValues = {
  name: "",
  email: "",
};
const onSubmit = (data: any) => {
  console.log(data); //отправка данных
};
const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: schemaValidate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name ? (
          <div className="errors">{formik.errors.name}</div>
        ) : null}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <div className="errors">{formik.errors.email}</div>
        ) : null}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
