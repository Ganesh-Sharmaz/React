import { useState, useContext } from "react";
import React from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }

    return (
        <div className=" space-x-3 bg-slate-900 p-4 rounded-lg text-white">
            <h2 className="text-xl pb-2">Login</h2>
            <input className=" items-center inline-flex p-2 rounded-md shadow-sm bg-slate-600"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="username"
            />

            <input className=" items-center inline-flex p-2 rounded-md shadow-sm bg-slate-600"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />

            <button className=" bg-gray-700 text-white" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
