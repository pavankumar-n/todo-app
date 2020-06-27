import React from "react";

const borderLeftColors = {
    "done": "BL-add-done",
    "todo": "BL-add-todo"
}

let AddNewRow = ({ type }) => {
    return (
        <tr className={`todo-item todo-add-item ${borderLeftColors[type]}`}>
            <td className="text-left pl-2">+ Add</td>
            <td></td>
            <td></td>
            <td className="bg-light-grey"></td>
            <td></td>
            <td className="bg-light-grey"></td>
            <td></td>
        </tr>
    )
}

export default AddNewRow;