import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <p>© {currentYear} Sanjay Kumar. Built with passion for networking.</p>
        </footer>
    );
};

export default Footer;
