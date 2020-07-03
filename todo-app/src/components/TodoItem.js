import React, { Component } from "react";

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

let TodoItem = ({ item }) => {

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
            <td className={item.status === "Done" ? "line-through" : ""}>
                <span className="progress-align">
                    <i class="fa fa-adjust"></i>
                </span>
                <span>
                    {item.dueDate}
                </span>
            </td>
            <td className={classes[item.priority]}>{item.priority}</td>
            <td></td>
        </tr>
    )
}

export default TodoItem;