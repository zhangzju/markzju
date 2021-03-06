import React from 'react';

import "./style.css";

function ItemEditor({item}) {
    if (!item || !item.id) {
        return (
            <div className="item-editor-layer-component">
                <p>Title</p>
                <input type="text" ref="title" placeholder="title"/>
                <textarea ref="content" placeholder="请填写内容"/>
            </div>
        )
    }

    return (
        <div className="edit-area">
          <p>Title</p>
          <input ref="title" placeholder="请填写标题" defaultValue={item.title} />
          <p>Article</p>
          <textarea ref="content" placeholder="请填写内容" defaultValue={item.content} />
        </div>
    )
}

export default ItemEditor;