import React from "react";

const Link = ({ href, className, children }) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, "", href);
    };

    return (
        <div>
            <a onClick={onClick} href={href} className={className}>
                {children}
            </a>
        </div>
    );
};

export default Link;
