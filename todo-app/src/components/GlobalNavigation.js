import React, { Component } from "react";

class GlobalNavigation extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
                
                {/**Icons at top of sidebar */}
                <div className="sidebar-icons h-120">
                    {/* <img className="logo" src="./img/logo.png" alt="" /> */}
                    <div>
                        <i class="fa fa-circle" style={{fontSize:'10px',color:'#b22b3c',marginRight:'2px'}}></i>
                        <i class="fa fa-circle" style={{fontSize:'10px',color:'#b38d02',marginRight:'2px'}}></i>
                        <i class="fa fa-circle" style={{fontSize:'10px',color:'#019633',marginRight:'2px'}}></i>
                    </div>
                    <i className="fa fa-bell-o white" aria-hidden="true"></i>
                    <div>
                        <i className="fa fa-download white" aria-hidden="true"></i>
                        <div className="noti-count"></div>
                    </div>
                </div>

                {/**Icons at bottom of sidebar */}
                <div className="sidebar-icons h-150">
                    <i className="fa fa-calendar-o white" aria-hidden="true"></i>
                    <i className="fa fa-user-plus white" aria-hidden="true"></i>
                    <img src="./img/search.svg" alt="" />
                    <i className="fa fa-question white" aria-hidden="true"></i>
                    <i className="fa fa-user-circle white" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default GlobalNavigation;