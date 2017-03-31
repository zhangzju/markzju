
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
        this.selectItem = this.selectItem.bind(this);
        this.createItem = this.createItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    selectItem(id){
        if (id === this.state.selectedId) {
            return;
        }

        this.setState({
            selectedId: id,
            editing: false,
        });
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

    createItem() {
        this.setState({
            editing: true,
            selectedId: null,
        })
    }

    deleteItem(id) {
        if(!id){
            return;
        }

        this.setState({
            items:this.state.items.filter(
                result => result.id !== id
            ),
        })
    }

    editItem(id) {
        this.setState({
            editing: true,
            selectedId: id,
        });
    }

    cancelEdit() {
        this.setState({
            editing: false,
        })
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

        const currentItem = items[0];

        return (
            
            <section className="deskmark-component">
            <div className="container">
                <div className="left">
                        <CreateBar  />
                        <List items={items} />
                </div>
                <div className="right">
                    <ItemEditor item={currentItem} />
                    <ItemShowLayer item={currentItem} />
                </div>
            </div>
        </section>
        )
    }
}