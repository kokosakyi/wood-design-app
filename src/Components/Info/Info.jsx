import React from 'react';

import './Info.css';

const Info = ({ title, children }) => {
    return (
        <div className="info">
            <img src="/img/cut_log.jpg" />
            <div className="info-card info-card-primary mt-4">
                <div className="card-body">
                    <div className="card-text">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Info;
