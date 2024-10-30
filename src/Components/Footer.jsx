import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Cojadu. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer;