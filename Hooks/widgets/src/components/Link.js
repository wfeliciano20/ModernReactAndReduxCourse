import React from "react";

const Link = ({ href, className, children }) => {
    return (
        <div>
            <a href={href} className={className}>
                {children}
            </a>
        </div>
    );
};

export default Link;
