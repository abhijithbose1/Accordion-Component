import React, { useState } from "react";
import "./Accordion.css";

const faq = [
    {
        id: 1,
        title: "About the website",
        description: "To know more about the website",
    },
    {
        id: 2,
        title: "Refund Policy",
        description: "To know about the Refund policy of the website",
    },
    {
        id: 3,
        title: "Will you visit again?",
        description: "welcome to this website , nice to meet you pls visit again",
    },
    {
        id: 4,
        title: "Contact us now",
        description: "To contact the website",
    },
];

export default function Accordion() {
    const [activeId, setActiveId] = useState(0);

    return (
        <div className="accordion-main-container">
            <img src="../../src/components/images/faqBackground.jpg" alt="" />
            <h1>FAQ</h1>

            {faq.map((data) => (
                <div className="accordion-container">
                    <div
                        className="accordion"
                        onClick={() => (activeId === data.id ? setActiveId(0) : setActiveId(data.id))}
                    >
                        <p>{data.title}</p>
                        {activeId === data.id ? (
                            <i className="fa-solid fa-caret-up" style={{ color: "black" }}></i>
                        ) : (
                            <i className="fa-solid fa-caret-down" style={{ color: "black" }}></i>
                        )}
                    </div>

                    {activeId === data.id && (
                        <div className="content-container">
                            <p>{data.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
