import { Dispatch, FormEvent, useEffect, useState } from "react";

import "./Form.css"

type User = {
    email: string,
    username: string,
    password: string,
};

const LoginForm = ({ setUser, setAction } : { setUser: Dispatch<User>, setAction: Dispatch<boolean> }) => {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const signIn = (e: FormEvent) => {
        e.preventDefault();

        const db = localStorage.getItem("users")?? "";

        const users: User[] = JSON.parse(db);

        if(users.some(u => u.email == email && u.password == password)) {
            const user = users.find(u => u.email == email);
            setUser(user!);
            setAction(true);
        }
    }

    return (
        <form onSubmit={(e) => signIn(e)}>
            <div className="form">
                <h1>Sign in</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        
                <button className="sign">Sign in</button>
            </div>
        </form>
    );
}

const RegisterForm = ({setAction} : {setAction: Dispatch<boolean>}) => {

    const [email, setEmail] = useState<string>();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const register = (e: FormEvent) => {
        e.preventDefault();

        if(localStorage.getItem("users") == null) {
            localStorage.setItem("users", JSON.stringify(new Array()));
        }

        if(email == undefined || username == undefined || password == undefined) {
            throw new Error("Empty request!");
        }

        const user: User = {
            email,
            username,
            password,
        }

        const storage = localStorage.getItem("users");
        const users: User[] = storage ? JSON.parse(storage) : [];

        console.log(users);
        

        if(users.some(u => u.email === user.email && u.username === user.username)) {
            throw new Error("User already exists!");
        }

        users.push(user);
        
        localStorage.setItem("users", JSON.stringify(users));

        setAction(true);
    }

    return (
        
            <form onSubmit={(e) => register(e)}>
                <div className="form">
                    <h1>Sign up</h1>
                    <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />

                    <button className="sign" type="submit">Sign up</button>
                </div>
            </form>
        
    );
}

const MessageBox = ({state, formState, user} : {state: boolean, formState: boolean, user: User | null}) => {
    return (
        <div className="message-box">
            {state ? formState ? "Registered Successfully!" : user ? `Welcome ${user.username}!` : null : null}
        </div>
    );
}

const Form = () => {

    const [formState, setFormState] = useState<boolean>(true);
    const [animateState, setAnimateState] = useState<boolean>(false);
    const [actionState, setActionState] = useState<boolean>(false);

    const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

    const switchForm = () => {
        triggerAnimation();
        setTimeout(() => {
            setFormState(!formState);
        }, 300);
    }

    const triggerAnimation = () => {
        setAnimateState(!animateState);
    }

    useEffect(() => {
        console.log(currentUser);
        
    }, [currentUser])

    return (
        <div className="form-wrapper">
            <div className="form-container animate">
                <div className={animateState ? "form-anim animate" : "form-anim"}>
                    { formState ? <LoginForm setUser={setCurrentUser} setAction={setActionState} /> : <RegisterForm setAction={setActionState}/> }
                </div>
                <div className={animateState ? "plate animate" : "plate"}>
                    <img src="icon.svg" alt="no source" />
                </div>
            </div>
            <button className="switch-button" onClick={switchForm}>{formState ? "Sign up" : "Sign in"}</button>

            <MessageBox state={actionState} formState={formState} user={null} />
        </div>
    )
}

export default Form
