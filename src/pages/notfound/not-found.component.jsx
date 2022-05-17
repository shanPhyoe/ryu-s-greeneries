import React from 'react';
import { useNavigate } from 'react-router-dom';

import './not-found.styles.scss';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="not-found">
            <img
                src="https://i.imgur.com/flHudHE.png"
                alt="error illustration"
            />
            <h2>Unbeleafable!</h2>
            <p>We realleaf couldn't vine the contrunk you requested.</p>
            <p>
                Click <span onClick={() => navigate('/')}>here</span> to go back
                to Home Page.
            </p>
        </div>
    );
};

export default NotFound;
