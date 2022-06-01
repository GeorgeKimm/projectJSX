import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const LoginFormFormik = () => {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        login: "",
        password: "",
      },
      validationSchema: Yup.object({
        login: Yup.string()
          .max(10, "Login must be shorter than 10 characters")
          .required("Required"),
        password: Yup.string()
          .min(6, "Password should be longer than 6 characters")
          .required(),
      }),
      onSubmit: (values) => {
        alert(`Login: ${values.login}, password: ${values.password}`);
      },
    });

  // -----------------------------------------------------------------------

  // альтернатива из рабочего проекта сергек, компонент CameraFilter.jsx
  // просто для сравнения, на данном учебном проекте это не используется
  // расположение кнопок и прочего в реальном проекте другое, здесь я так разместил для экономии места

  //   <Formik
  //   initialValues={initialValues}
  //   onSubmit={handleFormikSubmit}
  //   validationSchema={schema}
  //   onReset={handleFormikReset}
  // >
  // {({ values, handleSubmit, handleReset, errors }) => (
  //   <Grid container spacing={2} direction="column">
  // <ButtonGroup fullWidth variant="contained" color="primary">
  //   <Button onClick={handleSubmit}>{t('Применить')}</Button>
  //   <Button onClick={handleReset}>{t('Очистить')}</Button>
  // </ButtonGroup>
  // </Grid>

  // -----------------------------------------------------------------------

  // заметка
  // по сути логика подвязана на поле name
  // т.е. если дал название password у input, то надо использовать его и в initialValues и в других местах

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login">Login</label>
      <input
        value={values.login}
        onChange={handleChange}
        onBlur={handleBlur}
        id="login"
        name="login"
        type="text"
      />
      {touched.login && errors.login ? <div>{errors.login}</div> : null}
      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        type="password"
      />
      {touched.password && errors.password ? (
        <div>{errors.password}</div>
      ) : null}
      <button type="submit">Log in</button>
    </form>
  );
};
