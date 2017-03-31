import ListItem from '../ListItem';
import React, {PropTypes} from 'react';

import './style.css';

const propTypes = {
    items: PropTypes.array.isRequired,
};

function List ({ items }) {
    const itemsContent = items.map(
        item => (
            <ListItem
            item={item}
            key={item.id}
            />
        )
    );

    return (
        <div className="list">{itemsContent}</div>
    );
}

List.propTypes = propTypes;

export default List;