import React, { Component } from "react";

const data = [1, 2, 3, 4, 5]

class TodoList extends Component {
    render() {
        return (
            <div className="todo-list-container">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <i className={`fa fa-caret-down CP`} aria-hidden="true"></i>
                            </th>
                            <th className="blue text-left">Things to do</th>
                            <th></th>
                            <th>Owner</th>
                            <th className="header-highlight BR-5-left">Status</th>
                            <th className="header-highlight BR-5-right">Due date</th>
                            <th>Priority</th>
                            <th>
                                <i className="fa fa-plus-circle CP" title="Add" aria-hidden="true"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => {
                            return (
                                <tr key={item} className="todo-item">
                                    <td></td>
                                    <td className="text-left pl-2">New Item</td>
                                    <td>
                                        <i className="fa fa-comment-o f-18 fa-icon-light" aria-hidden="true"></i>
                                    </td>
                                    <td>
                                        <i className="fa fa-user-circle f-18 fa-icon-light" aria-hidden="true"></i>
                                    </td>
                                    <td>Working on it</td>
                                    <td>Apr 10</td>
                                    <td>High</td>
                                    <td></td>
                                </tr>
                            )
                        })}
                        <tr className="todo-item todo-add-item">
                            <td></td>
                            <td>+ Add</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList;