import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { showNotification } from "../../reducer/notificationReducer";
import "./Navbar.css";
import logo from "../../assets/logo.png" 
import { FaBars, FaTablets } from "react-icons/fa";

const Navbar = () => {
    // const [isNavOpen, setIsNavOpen]=useSelector("");
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(showNotification({ message: "Logged out successfully", severity: "success" }));
        // Implement logout logic here
    };

    return (
        <div className="navbar">
            <a href="/"><img src={logo} className="logo" ></img></a>

            <div className="nav-links">
                <a href="#dashboard">Dashboard</a>
                <a href="#subdivision">Subdivision Details</a>
                <a href="#resource">Resource Allocation</a>
                <a href="#reports">Reports</a>
                <a href="#help">Help</a>
            </div>

            <div className="navbar-actions">
                {/* <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </div> */}

                <div className="user-profile">
                    <FaUserCircle style={{fontSize:"2rem"}}/>
                    <div className="dropdown-content">
                        <a href="/login">Profile</a>
                        <a href="#settings">Settings</a>
                        <a href="#logout" onClick={handleLogout}>Logout</a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Navbar;
