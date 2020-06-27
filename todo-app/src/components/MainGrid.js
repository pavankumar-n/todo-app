import React, { Component } from "react";
import TopRow from "./TopRow";
import TodoList from "./TodoList";

class MainGrid extends Component {

    render() {
        return (
            <div>
                <TopRow />
                <hr />
                <TodoList />
            </div>
        )
    }
}

export default MainGrid;