import React from "react";

let SecondRow = () => {
    return (
        <div className="row-item">
            {/**Left content */}
            <div className="main-table flex-align-items">
                <i className="fa fa-table mr-2" aria-hidden="true"></i>
                <label className="mr-2 mb-0">Main Table</label>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>

            {/**Right icons */}
            <div className="right-icons d-flex align-items-center">
                <div className="btn-group mr-3">
                    <button type="button" className="btn btn-sm new-btn BR-left">New Item</button>
                    <button type="button" className="btn btn-sm new-btn BR-right dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only"></span>
                    </button>
                </div>
                <input className="filter-board-inp mr-3" type="text" placeholder="Search / Filter Board" />
                <i className="fa fa-user-circle f-18 fa-icon-light mr-3 mr-3" aria-hidden="true"></i>
                <i className="fa fa-eye-slash fa-icon-light mr-3" aria-hidden="true"></i>
                <i className="fa fa-wifi fa-icon-light f-13" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default SecondRow;