import React from 'react';

interface SectionDividerProps {
    id: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ id }) => {
    return (
        <div 
            id={id}
            className="section-divider"
            style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
                margin: '0 auto',
                width: '100%',
                maxWidth: '550px',
                scrollMarginTop: '80px',
                opacity: 1.0
            }}
        />
    );
};

export default SectionDivider;
