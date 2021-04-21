import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="row overflow-hidden">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="" style={{ height: "100vh" }}>
                    <div className="shadow-lg rounded">
                        <h1>Hello, <span className="text-primary">{sessionStorage.getItem('displayName')}</span> </h1>
                        <h3>Welcome To the Dashboard</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;