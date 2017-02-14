

import './style.css';

import React, {PrpTypes} from 'react';

const propTypes = {
    onClick: PropTypes.func.isRequired,
};

function CreateBar({ onClick}) {
    return (
        <a href="#" onClick={onClick} className="list-group-item create-bar-component">Create New Article</a>
    )
}

CreateBar.propTypes = propTypes;

export default CreateBar;