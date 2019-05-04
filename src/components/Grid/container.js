import React from "react";

export const Container = ({ fluid, children }) => {
    return (
        <div className={`container${fluid ? "-fluid" : ""}`}>
            {children}
        </div>
    );
};