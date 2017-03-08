
import React from 'react';
import uuid from 'uuid';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

import './style.css'

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            selectedId:　null,
            editing: false,
        };

        this.saveItem = this.saveItem.bind(this);
    }

    saveItem(item) {
        let items = this.state.items;
        item.id = uuid.v4();
        item.time = new Date().getTime();

        items = [...items, item];

        this.setState({
            items: items
        });
    }

    render() {
        const items = [
            {
                "id": "00001",
                "title": "00001",
                "content": "# markdown",
                "time": 145
            },{
                "id": "00002",
                "title": "00002",
                "content": "# second",
                "time": 146
            },
        ]

        return (
            <section className="deskmark-component">
            <div className="container">
                <div className="left">
                    <div className="col-md-4 list-group">
                        <CreateBar  />
                        <List items={items} />
                        <ItemEditor item={currentItem} />
                        <ItemShowLayer item={currentItem} />
                    </div>
                </div>
            </div>
        </section>
        )
    }
}