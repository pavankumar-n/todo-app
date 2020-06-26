import React, { Component } from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

class TopRow extends Component {

    render() {
        return (
            <div className="top-row-container">
                <FirstRow />
                <SecondRow />
            </div>
        )
    }
}

export default TopRow;