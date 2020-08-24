import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const CardMenu = ({ setUrl, imageUrl, heading, history }) => {

    const handleClick = ()=> {
        if (setUrl) {
            history.push(setUrl);
        }
        else  {
            alert('Status: Under development');
        }
    }

    return (
        <div className="card-menu" onClick={handleClick}>
            <div className="card-image">
                <img src={imageUrl} alt={heading} />
            </div>
            <div className="card-text">
                <p>{heading}</p>
            </div>
        </div>
    )
}

CardMenu.propTypes = {
    imageUrl: PropTypes.string,
    heading: PropTypes.string,
    setUrl: PropTypes.string
}

export default withRouter(CardMenu);
