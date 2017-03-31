import marked from 'marked';
import React, {PropTypes} from 'react';
import './style.css';


function ItemShowLayer({item}) {
    //if no item nor item.id passed in, return some tips
    if(!item || !item.id) {
        return (
            <div className="col-md-8 item-show-layer-component">
                <div className="no-select">Please choose an article!</div>
            </div>
        );
    }

    //transfer Markdown to html
    let content = marked(item.content);
    return (
        <div className="item-show">
            <div className="control-area">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
            <h2>{item.title}</h2>
            <div className="item-text card-block">
                <div dangerouslySetInnerHTML={{__html: content}} />
            </div>
        </div>
    )
}

export default ItemShowLayer;