import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export const Home = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Iltimos, 3 tadan ko'p belgi kiriting!")
      .required("Ismingizni kiritishingiz shart!"),
    surname: Yup.string(),
    phone: Yup.number().required("Telefon raqamingizni kiritishingiz shart!"),
    password: Yup.string()
      .min(6, "Iltimos, 6 tadan ko'p belgi kiriting!")
      .required("Parol kiritishingiz shart!"),
  });

  const initialValuesInputs = {
    name: "",
    surname: "",
    phone: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValuesInputs,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Home</h1>

      <div>
        <Link to="/photos" style={{ marginRight: "10px" }}>
          Photos
        </Link>
        <Link to="/musics">Music</Link>
      </div>

      <form onSubmit={formik.handleSubmit} style={{ marginTop: "10px" }}>
        <input
          onBlur={formik.handleBlur}
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          onBlur={formik.handleBlur}
          value={formik.values.surname}
          onChange={formik.handleChange}
          name="surname"
          type="text"
          placeholder="surname"
        />
        <input
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          onChange={formik.handleChange}
          name="phone"
          type="number"
          placeholder="phone number"
        />
        <input
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          type="password"
          placeholder="password"
        />

        <button type="submit">submit</button>
      </form>

      {formik.errors.name && formik.touched.name && (
        <h5 style={{ color: "hotPink" }}>{formik.errors.name}</h5>
      )}
      {formik.errors.surname && (
        <h5 style={{ color: "hotPink" }}>{formik.errors.surname}</h5>
      )}
      {formik.errors.phone && formik.touched.phone && (
        <h5 style={{ color: "hotPink" }}>{formik.errors.phone}</h5>
      )}
      {formik.errors.password && formik.touched.password && (
        <h5 style={{ color: "hotPink" }}>{formik.errors.password}</h5>
      )}
    </div>
  );
};
