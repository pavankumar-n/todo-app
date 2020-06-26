import React, { Component } from "react";
import GlobalNavigation from "./GlobalNavigation";
import ContextNavigation from "./ContextNavigation";
import MainGrid from "./MainGrid";

class Main extends Component {
    render() {
        return (
            <div className="page-container">
                <div className="left-container">
                    <GlobalNavigation />
                    <div className="strip"></div>
                    <ContextNavigation />
                </div>
                <div className="right-container">
                    <MainGrid />
                </div>
            </div>
        )
    }
}

export default Main;