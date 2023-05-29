import React, { useState } from "react";
//import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [userId, setUserId] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    //const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                userId,
                title,
                body,
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
                <label htmlFor="name">UserID</label>
                <input
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    type="id"
                    placeholder=""
                    id="userId"
                    name="userId"
                />
                <label htmlFor="name">id</label>
                <input
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    type="id"
                    placeholder=""
                    id="id"
                    name="id"
                />

                <label htmlFor="title">title</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="title"
                    placeholder=""
                    id="title"
                    name="title"
                />
                <label htmlFor="body">body</label>
                <input
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    type="title"
                    placeholder=""
                    id="body"
                    name="body"
                />


                <button>Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?Login Here</button>


        </div>

    )
}