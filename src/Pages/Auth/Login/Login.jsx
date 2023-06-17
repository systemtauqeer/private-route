import React, { useContext, useState } from 'react';
import { useAuthContext } from 'Context/AuthContext'; // Update the import statement with the correct file path


export default function Login() {
  const { dispatch } = useAuthContext();
  const [state, setState] = useState({ email: '', password: '' });
  const [isProcessing, setIsProcessing] = useState(true);

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleLogin = e => {
    e.preventDefault()

    let { fullName, email, password } = state

    const user = { fullName, email, password }
    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      dispatch({ type: "SET_LOGGED_IN", payload: { user } })
      localStorage.setItem("user", JSON.stringify(user))
    }, 2000)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col mt-5">
          <h1 className="text-center mb-5">Login Pages</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              className="btn btn-primary"
              onClick={ handleLogin}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
