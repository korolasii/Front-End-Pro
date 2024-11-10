import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddTodoForm = ({ onAddTodo }) => {
    const validationSchema = Yup.object({
        task: Yup.string()
        .min(5, 'Завдання має містити не менше 5 символів')
        .required("Обов'язкове поле"),
    });

    return (
        <Formik
            initialValues={{ task: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                onAddTodo(values.task);
                resetForm();
            }}>
            {() => (
                <Form>
                    <label htmlFor="task">Нове завдання:</label>
                    <Field type="text" name="task" id="task" />
                    <ErrorMessage name="task" component="div" style={{ color: 'red' }} />
                    <button type="submit">Додати</button>
                </Form>
            )}
        </Formik>
    );
};

export default AddTodoForm;
