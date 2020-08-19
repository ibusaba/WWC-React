import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <p> {currentYear}</p>
        </div>
    );
}

export default Footer;