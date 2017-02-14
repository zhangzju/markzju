import React from 'react';

import "./style.css";

export default class ItemEditor extends React.Component {
    render() {

        return (
        <div className="col-md-8 item-editor-component">
            <div className="control-area">
                <button className="btn btn-success">{saveText}</button>
                <button className="btn secondary">Cancel</button>
            </div>
            <div className="edit-area">
                <input ref="title" placeholder="Input the title" defaultValue={item.title}/>
                <textarea ref="content" defaultValue="item.content" />
            </div>
        </div>
        );
    }
}