import React, { Component } from "react";
import { list } from "./todoitems.js";
console.log(list)

const classes = {
    "Working on it": "in-progress",
    "Waiting for review": "in-review",
    "Done": "done",
    "Stuck": "stuck",
    "Urgent": "urgent",
    "Low": "low",
    "High": "high",
    "Medium": "medium",
    "": "very-low"
}

class TodoList extends Component {
    render() {
        return (
            <div className="todo-list-container">
                <table>
                    <thead>
                        <tr>
                            <th className="blue text-left">
                                <i className={`fa fa-caret-down CP`}></i>
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
                        {list[0].items.map(item => {
                            return (
                                <tr key={item} className="todo-item">
                                    <td className="text-left pl-2">{item.label}</td>
                                    <td>
                                        <i className="fa fa-comment-o f-18 fa-icon-light" aria-hidden="true"></i>
                                    </td>
                                    <td>
                                        <i className="fa fa-user-circle f-18 fa-icon-light" aria-hidden="true"></i>
                                    </td>
                                    <td className={classes[item.status]}>{item.status}</td>
                                    <td className={item.status === "Done" ? "line-through" : ""}>{item.dueDate}</td>
                                    <td className={classes[item.priority]}>{item.priority}</td>
                                    <td></td>
                                </tr>
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
                </table>
            </div>
        )
    }
}

export default TodoList;