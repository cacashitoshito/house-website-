import React from "react";
import {NavLink, } from "react-router-dom";

class Header extends React.Component {
    render() {
        return(
            <header>
            <div class="background-image">
            <div class="navbar">
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="Bedroom" exact activeClassName="active">Bedroom</NavLink></li>
                <li><NavLink to="Dining" exact activeClassName="active">Dining</NavLink></li>
                <li><NavLink to="Kitchen" exact activeClassName="active">Kitchen</NavLink></li>
                <li><NavLink to="Backyard" exact activeClassName="active">Backyard</NavLink></li>

            </ul>
        </div>
        </div>
        </header>
        );
    }
}

export default Header;