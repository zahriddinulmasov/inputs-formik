import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/authContext";

export const Login = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const authInfo = fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: nameRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => { console.log(data);
        if (!data.error) {
          if (data.token) {
            window.localStorage.setItem("token", data.token);
          }
        } else {
          alert("Email yoki parolingiz xato!");
        }
      });

    setToken(authInfo);
    navigate("/");
  };

  return (
    <div>
      <h3>Registration</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="exampleName">Firs Name</label>
          <input
            defaultValue="eve.holt@reqres.in"
            ref={nameRef}
            type="text"
            id="exampleName"
            placeholder="Name"
          />
        </div>

        <div>
          <label for="examplePassword">Password</label>
          <input
            defaultValue="cityslicka"
            ref={passwordRef}
            type="password"
            id="examplePassword"
            placeholder="Password"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
