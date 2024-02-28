import { useState, useEffect } from 'react';

const CursorTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', updatePosition);
        return () => {
            document.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return (
        <div className="cursor" style={{ position: 'fixed', left: `${position.x}px`, top: `${position.y}px`, zIndex: 9999 }}>
            👀
        </div>
    );
};

export default CursorTracker;
