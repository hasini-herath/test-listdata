import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

//import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";

export const Register = (props) => {

    const [email, setEmail] = useState("");
    const [first_name, setFirst] = useState("");
    const [last_name, setLast] = useState("");
    const [avatar, setAvatar] = useState("");

    //const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://reqres.in/api/users?page=1', {
            method: 'POST',
            body: JSON.stringify({
       
                email,
                first_name,
                last_name,
                avatar,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    return (
        <div className="auth-form-container">

            <form className="register-form" onSubmit={handleSubmit}>
         
                <label htmlFor="name">email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="iemaild"
                    placeholder=""
                    id="email"
                    name="email"
                />

                <label htmlFor="first_name">first_name</label>
                <input
                    value={first_name}
                    onChange={(e) => setFirst(e.target.value)}
                    type="first_name"
                    placeholder=""
                    id="first_name"
                    name="first_name"
                />
                <label htmlFor="last_name">last_name</label>
                <input
                    value={last_name}
                    onChange={(e) => setLast(e.target.value)}
                    type="last_name"
                    placeholder=""
                    id="last_name"
                    name="last_name"
                />

<label htmlFor="avatar">avatar</label>
                <input
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    type="avatar"
                    placeholder=""
                    id="avatar"
                    name="avatar"
                />



                <button>Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?Login Here</button>


        </div>

    )
}