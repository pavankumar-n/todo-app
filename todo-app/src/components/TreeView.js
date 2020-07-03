import React from "react";
import PropTypes from "prop-types";

let TreeView = ({ treeData, toggleTreeItems, activeItem, selectItem }) => {
    return (
        <ul>
            {treeData.map(item => {
                return (
                    <li key={item.id} className="item" name={item.name}>
                        <div className="flex-align-items justify-content-between">
                            <div className="flex-align-items">
                                <i className={`fa fa-caret-${item.expand ? 'down' : 'right'} CP`} onClick={() => toggleTreeItems(item)} aria-hidden="true" title="Expand"></i>
                                <i className="fa fa-home ml-2 home-icon" aria-hidden="true"></i>
                                <div className="ml-2">{item.name}</div>
                            </div>
                            <span className="circle plus"></span>
                        </div>
                        {item.expand && item.subMenu.length ?
                            <ul className="sub-menu-wrap">
                                {item.subMenu.map(subItem => {
                                    return (
                                        <li className={`sub-items ${subItem.id === activeItem.id ? 'active' : ''}`}
                                            key={subItem.id}
                                            onClick={() => selectItem(subItem)}
                                        >
                                            {subItem.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        : null}
                    </li>
                )
            })}
        </ul>
    )
}

TreeView.defaultProps = {
    treeData: [],
    activeItem: {}
}

TreeView.propTypes = {
    toggleTreeItems: PropTypes.func.isRequired,
    selectItem: PropTypes.func
}

export default TreeView;