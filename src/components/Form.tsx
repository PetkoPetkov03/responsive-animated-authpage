import { useState } from "react";

import "./Form.css"

const LoginForm = () => {
    return (
        <div className="form">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Sign in</button>
        </div>
    );
}

const RegisterForm = () => {
    return (
        <div className="form">
            <h1>Sign up</h1>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button>Sign up</button>
        </div>
    );
}

const Form = () => {

    const [formState, setFormState] = useState<boolean>(true);

    const switchForm = () => {
        setFormState(!formState);
    }

    return (
        <div className="form-container">
            { formState ? <LoginForm /> : <RegisterForm /> }
            <button onClick={switchForm} type="button">{formState ? "Sign up" : "Sign in"}</button>
        </div>
    )
}

export default Form
