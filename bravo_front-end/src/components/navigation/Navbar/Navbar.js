/* Package imports */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

/* Component Imports */
/* Styling */
const NavbarContainer = styled.nav`
	height: 65px;
	padding: 0 40px;
	display: flex;
	align-items: center;
	justify-content: center;

	background: white;
  border-bottom: 1px solid #ccc;
  
  ul {
    flex-grow: 1;
    margin: 0;
    padding: 0;
    text-align: right;
    list-style: none;
    
  }

  li {
    display: inline-block;
    margin: 10px;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

/* COMPONENT */
const Navbar = props => {
	/* STATE VARIABLES ------------------------------------------ */
	/* HOOKS ---------------------------------------------------- */
	/* METHODS -------------------------------------------------- */
	/* HANDLERS ------------------------------------------------- */
	/* CONDITIONAL SUB-COMPONENTS ------------------------------- */
	/* RENDER --------------------------------------------------- */
	return (
		<NavbarContainer>
			<Link to="/"><p>
				<strong>Oregon</strong>Ciderhouse
			</p></Link>
			<ul>
				<li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink style={{color: "red"}} to="/admin">Admin Dashboard</NavLink></li>
        <li><NavLink style={{color: "red"}} to="/admin/analytics">Admin Analytics</NavLink></li>
        <li><NavLink style={{color: "red"}} to="/user" >User Dashboard</NavLink></li>
			</ul>
		</NavbarContainer>
	);
};

export default Navbar;


/* TODO:
1)  Change contents when user is logged in (must be specific to user/admin)

*/