import React, { useState, useEffect } from 'react';
import './KeyComponent.css';

const KeyComponent = ({ keyValue, onClick }) => {
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key.toLowerCase() === keyValue.toLowerCase()) {
                setIsPressed(true);
                onClick();
            }
        };

        const handleKeyUp = (event) => {
            if (event.key.toLowerCase() === keyValue.toLowerCase()) {
                setIsPressed(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [keyValue, onClick]);

    const handleMouseDown = () => {
        setIsPressed(true);
        onClick();
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };
    
    return (
        <button 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={isPressed ? 'pressed' : ''}
        >
            {keyValue}
        </button>
    );
};

export default KeyComponent;

