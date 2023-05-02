import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import MessageError from "./MessageError";

const schemaValidate = yup.object({
  name: yup.string().required("Name is empty"),
  email: yup.string().email("Ivalid email").required("Email is empty"),
  comment: yup.string().required("Comment is empty").min(10, "No 10"),
  //skills.qa: yup.string().required("Empty"), //ERROR
});

const initialValues = {
  name: "",
  email: "",
  comment: "",
  skills: {
    programm: "",
    qa: "",
    devops: "",
  },
  phones: ["3443", "87373"],
  extPhone: ["555"],
};
const onSubmit = (data: any) => {
  console.log(data); //отправка данных
};
const NewForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaValidate}
      onSubmit={onSubmit}
    >
      <Form>
        <label>
          Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" component={MessageError} />
        </label>
        <br />
        <label>
          Email:
          <Field type="email" name="email" />
          <ErrorMessage name="email" component={MessageError} />
        </label>
        <br />
        <label>
          Comment:
          <br />
          <Field component="textarea" name="comment" />
          <ErrorMessage name="comment">
            {(err) => <div className="errors">{err} </div>}
          </ErrorMessage>
        </label>
        <hr />
        <label>
          Skills:
          <br />
          <Field type="text" name="skills.qa" />
          <br />
          <Field type="text" name="skills.devops" />
        </label>
        <br />
        <hr />
        <label>
          Phones:
          <br />
          <Field type="text" name="phones[0]" />
          <br />
          <Field type="text" name="phones[1]" />
        </label>
        <br />
        <hr />
        <FieldArray name="extPhone">
          {(fieldProps: any) => {
            const { push, remove, form } = fieldProps;
            const { values } = form;
            const { extPhone } = values;
            return (
              <div>
                {extPhone.map((phone: string, index: number) => (
                  <div key={index}>
                    <Field type="text" name={`extPhone[${index}]`} />
                    <button type="button" onClick={() => remove(index)}>
                      -
                    </button>
                    <button type="button" onClick={() => push("")}>
                      +
                    </button>
                  </div>
                ))}
              </div>
            );
          }}
        </FieldArray>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default NewForm;
