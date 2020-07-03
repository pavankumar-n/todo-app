import React, { Component } from "react";
import TopRow from "./TopRow";
import ItemsList from "./ItemsList";

class MainGrid extends Component {

    render() {
        return (
            <div>
                <TopRow />
                <hr />
                <ItemsList />
            </div>
        )
    }
}

export default MainGrid;