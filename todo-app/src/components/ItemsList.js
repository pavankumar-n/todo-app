import React, { Component } from "react";
import { list } from "./todoitems.js";
import Item from "./Item";
import AddNewItem from "./AddNewItem.js";
import BottomProgress from "./BottomProgress";

const textColorPicker = {
    "todo": "blue",
    "done": "green"
}

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: list
        }
        this.collapseItems = this.collapseItems.bind(this);
    }

    collapseItems = (e) => {
        let { id } = e.target;
        let { listItems } = this.state;
        listItems[id].expand = !listItems[id].expand;
        this.setState({ listItems });
    }

    render() {
        let { listItems } = this.state;

        return (
            <div className="todo-list-container">
                {listItems.map((group, index) => {
                    return (<table>
                        <thead>
                            <tr>
                                <th className={`text-left ${textColorPicker[group.type]}`}>
                                    <div>
                                        <i className={`fa fa-caret-${group.expand ? 'down col-fill' : 'right'} CP back-fill`} id={index} onClick={this.collapseItems}></i>
                                        <span className="ml-2 FW-500">{group.name}</span>
                                    </div>
                                </th>
                                <th className="w-4"></th>
                                <th className="w-11">Owner</th>
                                <th className="header-highlight BR-5-left w-11">Status</th>
                                <th className="header-highlight BR-5-right w-11">Due date</th>
                                <th className="w-11">Priority</th>
                                <th className="w-4">
                                    <i className="fa fa-plus-circle CP" title="Add" aria-hidden="true"></i>
                                </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {group.expand && group.items.map(item => {
                                return (
                                    <Item
                                        item={item}
                                        type={group.type}
                                    />
                                )
                            })}
                            <AddNewItem
                                type={group.type}
                            />
                        </tbody>
                        <BottomProgress />
                    </table>)
                })}
            </div>
        )
    }
}

export default TodoList;