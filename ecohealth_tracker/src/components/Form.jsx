import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";
import 'bootstrap/dist/css/bootstrap.min.css';

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (method === "register" && password !== confirmPassword) {
            alert("Passwords do not match");
            setLoading(false);
            return;
        }
        try {
            const res = await api.post(route, { username, email, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <section className="bg-light p-3 p-md-4 p-xl-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xxl-11">
                            <div className="card border-light-subtle shadow-sm">
                                <div className="row g-0">
                                    <div className="col-12 col-md-6">
                                        <img className="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src={require('../utils/img/logobien.jpg')} alt="ecohealth tracker" />
                                    </div>
                                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                        <div className="col-12 col-lg-11 col-xl-10">
                                            <div className="card-body p-3 p-md-4 p-xl-5">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="mb-5">
                                                            <h4 className="text-center">Welcome !</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="d-flex gap-3 flex-column">
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="d-flex gap-3 flex-column">
                                                                <a href="#!" className="btn btn-lg btn-outline-dark">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                                    </svg>
                                                                    <span className="ms-2 fs-6">Log in with Google</span>
                                                                </a>
                                                            </div>
                                                            <p className="text-center mt-4 mb-5">Or sign in with</p>
                                                        </div>
                                                    </div>
                                                    <form onSubmit={handleSubmit} className="form-container">
                                                        <h1 className="mb-4">{name}</h1>
                                                        <div className="mb-3">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                value={username}
                                                                onChange={(e) => setUsername(e.target.value)}
                                                                placeholder="Username"
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <input
                                                                className="form-control"
                                                                type="password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                placeholder="Password"
                                                            />
                                                        </div>
                                                        {method === "register" && (
                                                            <> <div className="mb-3">
                                                                <input
                                                                    className="form-control"
                                                                    type="password"
                                                                    value={confirmPassword}
                                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                                    placeholder="Confirm Password"
                                                                />
                                                            </div>
                                                                <div className="mb-3">
                                                                    <input
                                                                        className="form-control"
                                                                        type="email"
                                                                        value={email}
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                        placeholder="Email"
                                                                    />
                                                                </div>

                                                            </>
                                                        )}
                                                        {method === "login" && (
                                                            <div className="col-12">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                                                                    <label className="form-check-label text-secondary" htmlFor="remember_me">
                                                                        Remember me
                                                                    </label>
                                                                </div>
                                                            </div>)}
                                                        <br />
                                                        <div className="col-12">
                                                            <div className="d-grid">
                                                                <button className="btn btn-dark btn-lg" type="submit">{loading ? <LoadingIndicator /> : name}</button>
                                                            </div>
                                                        </div>
                                                    </form>


                                                    {method === "login" ? (
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                                                                    <a href="/register" className="link-secondary text-decoration-none">Create new account</a>
                                                                    <a href="" className="link-secondary text-decoration-none">Forgot password</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                                                                    <a href="/login" className="link-secondary text-decoration-none">Log in</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </section >
        </>
    );
}

export default Form