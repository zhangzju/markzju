import ListItem from '../ListItem';
import React, {PropTypes} from 'react';

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
        <div className="list-component col-md-4 list-group">{itemsContent}</div>
    );
}

List.propTypes = propTypes;

export default List;