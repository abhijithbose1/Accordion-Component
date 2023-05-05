import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./UserList.css";

export default function UserList() {
    const [userList, setUserList] = useState([]);
    const [count, setCount] = useState(0);
    const [buttonText, setButtonText] = useState(["delete"]);

    useEffect(() => {
        (async () => {
            const resolve = await axios("https://jsonplaceholder.typicode.com/todos");
            setUserList(resolve.data);
            setCount(resolve.data.length);
            console.log(resolve);
        })();
    }, []);

    const buttonClick = (id) => {
        userList.splice(id, 1);
        setCount(count - 1);
    };

    return (
        <div className="userlist-container">
            <div className="inner-container">
                <h1>Fetched Data Count = {count}</h1>
                <ol>
                    {userList.map((data, index) => {
                        return (
                            <li className="listData" key={data.id}>
                                {data.title}{" "}
                                <button onClick={() => buttonClick(index)} id="delete" key={data.title}>
                                    {buttonText}
                                </button>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}
