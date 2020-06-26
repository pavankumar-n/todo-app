import React from "react";

let FirstRow = ({}) => {
    return (
        <div className="row-item">
            <div className="menu-label">
                <span>Web Design</span>
                <i className="fa fa-star-o font-icons ml-3" aria-hidden="true"></i>
                <h4 className="description">Add board description</h4>
            </div>
            <div className="right-icons d-flex align-items-center">
                <i className="fa fa-user-circle font-icons mr-3" aria-hidden="true"></i>
                <div className="flex-align-items user-activities mr-3">
                    <i className="fa fa-plug font-icons mr-1" aria-hidden="true"></i>/ 0
                        </div>
                <div className="flex-align-items user-activities mr-3">
                    <i className="fa fa-android font-icons mr-1" aria-hidden="true"></i>/ 1
                        </div>
                <div className="flex-align-items call-icon-wrap mr-3">
                    <i className="fa fa-video-camera video-icon font-icons" aria-hidden="true"></i>
                    <span>Start Zoom call</span>
                </div>
                <div className="flex-align-items user-activities mr-3">
                    <i className="fa fa-users font-icons mr-1" aria-hidden="true"></i>/ 1
                            <span>Activities / 0</span>
                </div>
                <i className="fa fa-ellipsis-h font-icons" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default FirstRow;