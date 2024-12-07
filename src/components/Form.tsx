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
    const [animateState, setAnimateState] = useState<boolean>(false);

    const switchForm = () => {
        triggerAnimation();
        setTimeout(() => {
            setFormState(!formState);
        }, 300);
    }

    const triggerAnimation = () => {
        setAnimateState(!animateState);
    }

    return (
        <div className="form-wrapper">
            <div className="form-container animate">
                <div className={animateState ? "form-anim animate" : "form-anim"}>
                    { formState ? <LoginForm /> : <RegisterForm/> }
                </div>
                <div className={animateState ? "plate animate" : "plate"}>
                    <img src="icon.svg" alt="no source" />
                </div>
            </div>
            <button className="switch-button" onClick={switchForm}>{formState ? "Sign up" : "Sign in"}</button>
        </div>
    )
}

export default Form
