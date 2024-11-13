import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/StorageService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserSchema = Yup.object().shape({
  firstName: Yup.string().required("Имя обязательно"),
  lastName: Yup.string().required("Фамилия обязательна"),
  email: Yup.string().email("Неверный формат email").required("Email обязателен"),
});

export default function AddUserPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (values) => {
    setLoading(true);
    setError(null);
    try {
      await addUser(values);
      setSuccessMessage("Пользователь успешно добавлен!");
      setTimeout(() => navigate(`/`), 1500);
    } catch (err) {
      setError("Ошибка при добавлении пользователя");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="FormUpdate">
      {loading && <p>Отправка данных...</p>}
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form>
          <div className="formField">
            <label>Имя</label>
            <Field name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>
          <div className="formField">
            <label>Фамилия</label>
            <Field name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          <div className="formField">
            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <button type="submit" className="buttonUpdate" id="buttonSave" disabled={loading}>Сохранить</button>
        </Form>
      </Formik>
    </div>
  );
}
