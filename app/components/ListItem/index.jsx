import React, {PropTypes} from 'react';
import './style.css';

//ProTypes

const propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

function ListItem({ item }) {

    return (
        <a href="#" className="list-group-item item-component">
            <span className="label label-default label-pill pull-xs-right">{item.time}</span>
            <span className="item-title">{item.title}</span>
        </a>
    );
}

ListItem.propTypes = propTypes;

export default ListItem;