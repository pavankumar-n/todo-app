import React from "react";

const backgroundColors = {
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

const borderLeftColors = {
    "done": "BL-done",
    "todo": "BL-todo"
}

let Item = ({ item, type }) => {

    return (
        <tr key={item} className={`todo-item ${borderLeftColors[type]}`}>
            <td className="text-left pl-2">{item.label}</td>
            <td>
                <i className={`fa fa-comment-o f-18 ${item.comments.length ? 'blue' : 'fa-icon-light'}`} aria-hidden="true"></i>
            </td>
            <td>
                <i className="fa fa-user-circle f-18 fa-icon-light" aria-hidden="true"></i>
            </td>
            <td className={backgroundColors[item.status]}>{item.status}</td>
            <td className={item.status === "Done" ? "line-through" : ""}>{item.dueDate}</td>
            <td className={backgroundColors[item.priority]}>{item.priority}</td>
            <td></td>
        </tr>
    )
}

export default Item;