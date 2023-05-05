import viteLogo from "/vite.svg";
import "./App.css";
// import { useEffect } from "react";
import Accordion from "./components/Accordion";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
    const [component, setComponent] = useState({});
    //to set the onHandle to take a string (Ln.33,34) and thus use to identify the component to display (Ln.37,38)
    const [btnColor, setBtnColor] = useState(null);
    //to set the color of button when clicked turns to green as defined in Ln.34,35 by taking a unique id for each button

    function onHandle(value, colorId) {
        if (!component[value]) {
            console.log("hi");
            setComponent({ [value]: true });
            setBtnColor(colorId);
        } else {
            setComponent({ value: false });
            setBtnColor(null);
        }
    }

    console.log(component);
    console.log(btnColor);

    return (
        <div className="app-container">
            <div className="app-btn-container">
                <button
                    style={{ background: btnColor === 1 ? "green" : "cornflowerblue" }}
                    //calling a state inside style does not need {} or ""
                    onClick={() => onHandle("userList", 1)}
                >
                    User List
                </button>
                <button
                    style={{ background: btnColor === 2 ? "green" : "cornflowerblue" }}
                    onClick={() => onHandle("accordion", 2)}
                >
                    Accordion
                </button>
            </div>
            <div className="welcome-container">
                <h1 className="welcome-text">Welcome to Task 3</h1>
                <h4>SELECT ANY COMPONENT TO VIEW</h4>
            </div>
            {component.userList && <UserList />}
            {/* here it checks if component.userList is ture or false, 
            if true then userList component will be executed. similarly for all other components */}
            {component.accordion && <Accordion />}
            
        </div>
    );
}

export default App;
