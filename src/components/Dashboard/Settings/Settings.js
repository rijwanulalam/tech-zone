import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Settings = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="row align-content-center" style={{ height: "100vh" }}>
                    <div className="shadow-lg p-3 mb-5 rounded">
                        <h3>This page is in under Construction</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;