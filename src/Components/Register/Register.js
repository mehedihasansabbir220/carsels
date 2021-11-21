
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const { singUp, user, authError } = useAuth();
    const onSubmit = data => {
        singUp(data.email, data.password, data.name)
        // console.log(data);
        navigate(from, { replace: true });


    };

    console.log(watch("example"));
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Label>Name</Form.Label>
                                <input type='name' className="w-100 w-100 my-3 p-2" {...register("name", { required: true })} />
                                <Form.Label>Email</Form.Label>
                                <input type='email' className="w-100 w-100 my-3 p-2" {...register("email", { required: true })} />
                                <Form.Label>Please Enter Your Password</Form.Label>
                                <input type='password' className="w-100 w-100 my-3 p-2" {...register("password")} />

                                {errors.exampleRequired && <span>This field is required</span>}
                                <Button className="w-100" type="submit">
                                    Sign Up
                                </Button>
                            </form>
                            {/* {isLoading && <ProgressBar />} */}
                            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>

                </div>

            </Container>
        </>
    );
};

export default Register;