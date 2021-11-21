import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { singIn, setUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        singIn(data.email, data.password, navigate, location, data.name)
        navigate(from, { replace: true });

    };
    console.log(setUser);

    console.log(watch("example"));
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">LogIn</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Label>Email</Form.Label>
                                <input type='email' className="w-100 w-100 my-3 p-2" {...register("email", { required: true })} />
                                <Form.Label>Please Enter Your Password</Form.Label>
                                <input type='password' className="w-100 w-100 my-3 p-2" {...register("password")} />

                                {errors.exampleRequired && <span>This field is required</span>}
                                <Button className="w-100" type="submit">
                                    Log In
                                </Button>
                            </form>

                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        New User Create an account? <Link to="/register">Register </Link>
                    </div>

                </div>

            </Container>
        </>
    );
};

export default Login;