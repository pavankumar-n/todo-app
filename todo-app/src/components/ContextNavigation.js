import React, { Component } from "react";

class ContextNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: [{
                id: "1",
                name: "Main",
                subMenu: [{id: "1.1", name: "Web Design"}, {id: "1.2", name: "Web Application"}],
                expand: true
            }]
        }
    }

    render() {
        let { menuItems } = this.state;

        return (
            <div className="cntxt-nav-wrapper">
                <div className="cntxt-top">
                    <div className="cntxt-nav-title">Workspaces</div>
                    <div className="filter-board-search">
                        <img src="./img/search_black.svg" />
                        <input type="text" name="search" placeholder="Filter boards..." />
                    </div>
                </div>

                <div className="menu-items">
                    <ul>
                        {menuItems.map((item, index) => {
                            return (
                                <li key={item.id} className="item d-flex" name={item.name}>
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-caret-right CP" aria-hidden="true" title="Expand"></i>
                                        <i className="fa fa-home ml-2 home-icon" aria-hidden="true"></i>
                                        <div className="ml-2">{item.name}</div>
                                    </div>
                                    <i className="fa fa-plus-circle CP blue" title="Add" aria-hidden="true"></i>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="cntxt-bottom">
                    <hr />
                    <div className="dashboard">Dashboards</div>
                    <hr />
                    <div className="p-2">
                        <div className="p-1 border-outline BR-5 app-icons">Get the mobile app
                            <i className="fa fa-android ml-2" aria-hidden="true"></i>
                            <i className="fa fa-apple ml-2" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContextNavigation;