import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../services/StorageService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import './UserPage.css';

const UserSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
});

function ErrorSpan(error) {
  return (<span className="error">{error}</span>);
}

export default function UserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getUserById(userId);
        setUser(userData);
      } catch (err) {
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [userId]);

  const handleSubmit = async (values) => {
    setError(null);
    setLoading(true);
    try {
      await updateUser(values);
      setSuccessMessage("User updated successfully!");
      setTimeout(() => navigate(`/`), 1500); // Redirect after 1.5 seconds
    } catch (err) {
      setError("Error updating user.");
    } finally {
      setLoading(false);
    }
  };

  const back = () => {
    navigate(`/`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="FormUpdate">
      {successMessage && <div className="success">{successMessage}</div>}
      <Formik
        initialValues={user}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
        enableReinitialize
      >
        <Form>
          <div className="formField">
            <Field name="firstName" />
            <ErrorMessage name="firstName" render={ErrorSpan} />
          </div>
          <div className="formField">
            <Field name="lastName" />
            <ErrorMessage name="lastName" render={ErrorSpan} />
          </div>
          <div className="formField">
            <Field name="email" type="email" />
            <ErrorMessage name="email" render={ErrorSpan} />
          </div>
          <div className="buttonFormContainer">
            <button type="submit" className="buttonUpdate">Save</button>
            <div className="buttonUpdate Exit" onClick={back}>Exit</div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
