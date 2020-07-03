import React, { Component } from "react";
import GlobalNavigation from "./GlobalNavigation";
import ContextNavigation from "./ContextNavigation";
import MainGrid from "./MainGrid";
import { callbackify } from "util";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleValue: false
        }
    }

    handleToggle = (toggle) => {
        console.log(toggle,"-------toggle")
        this.setState({
            toggleValue : toggle
        })
        
    }

    render() {
        let { toggleValue } = this.state;
        return (
            <div className="page-container">
                <div className="left-container">
                    <GlobalNavigation />
                    <div className="strip"></div>
                    <ContextNavigation handleToggle={this.handleToggle}/>
                </div>
                <div className="right-container" style={ toggleValue ? { width: "calc(100vw - 85px)"  } : { width:"calc(100vw - 295px)"  }}>
                    <MainGrid />
                </div>
            </div>
        )
    }
}

export default Main;