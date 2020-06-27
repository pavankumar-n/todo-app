import React, { Component } from "react";
import { list } from "./todoitems.js";
import TodoItem from "./TodoItem.js";

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
                                <th className="blue text-left">
                                    <i className={`fa fa-caret-${group.expand ? 'down' : 'right'} CP`} id={index} onClick={this.collapseItems}></i>
                                    <span className="ml-2">Things to do</span>
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
                                    <TodoItem
                                        item={item}
                                    />
                                )
                            })}
                            <tr className="todo-item todo-add-item">
                                <td className="text-left pl-2">+ Add</td>
                                <td></td>
                                <td></td>
                                <td className="bg-light-grey"></td>
                                <td></td>
                                <td className="bg-light-grey"></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>)
                })}
            </div>
        )
    }
}

export default TodoList;