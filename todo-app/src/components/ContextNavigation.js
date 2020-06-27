import React, { Component } from "react";
import TreeView from "./TreeView";

class ContextNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: [{
                id: "1",
                name: "Main",
                subMenu: [{ id: "1.1", name: "Web Design" }, { id: "1.2", name: "Web Application" }, { id: "1.3", name: "Websites" }],
                expand: true
            }],
            activeItem: { id: "1.1", name: "Web Design" }
        }
        this.expandItem     = this.expandItem.bind(this);
        this.setActiveItem  = this.setActiveItem.bind(this);
    }

    expandItem(item) {
        let { menuItems } = this.state;
        let index = menuItems.findIndex(menu => menu.id === item.id);
        if(index > -1) {
            menuItems[index].expand = !menuItems[index].expand;
        }
        this.setState({ menuItems })
    }

    setActiveItem(activeItem) {
        this.setState({ activeItem });
    }

    render() {
        let { menuItems, activeItem } = this.state;

        return (
            <div className="cntxt-nav-wrapper">
                <div className="cntxt-top">
                    <div className="cntxt-nav-title">Workspaces</div>
                    <div className="filter-board-search">
                        <img src="./img/search_black.svg" alt=""/>
                        <input type="text" name="search" placeholder="Filter boards..." />
                    </div>
                </div>

                <div className="menu-items">
                    <TreeView
                        treeData={menuItems}
                        toggleTreeItems={this.expandItem}
                        selectItem={this.setActiveItem}
                        activeItem={activeItem}
                    />
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
                <div className="toggle-button">
                    <i className="fa fa-angle-left left-arrow-align" aria-hidden="true"></i>
                </div>
            </div>
            
        )
    }
}

export default ContextNavigation;