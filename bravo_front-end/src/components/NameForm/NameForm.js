/* Package imports */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* Component Imports */


/* Styling */
const NameFormContainer = styled.div`
	width: 20%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	background: rgba(250, 250, 250, 0.8);
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

/* COMPONENT */
const NameForm = props => {
	/* STATE VARIABLES ------------------------------------------ */
	/* HOOKS ---------------------------------------------------- */
	/* METHODS -------------------------------------------------- */
	/* HANDLERS ------------------------------------------------- */
	/* CONDITIONAL SUB-COMPONENTS ------------------------------- */
	/* RENDER --------------------------------------------------- */
	return (
		<NameFormContainer>
			
			<p>First Name: </p>
			<input type="text" name="first_name"/>
			<p>Last Name: </p>
			<input type="text" name="last_name"/>
			{/* eslint-disable-next-line */}
			<Link to="/admin">
				<button style={{margin: "5px 10px"}}>Update</button>
			</Link>
			<Link to="/user">
				<button style={{margin: "5px 10px"}}>Cancel</button>
			</Link>
		</NameFormContainer>
	);
};

export default NameForm;

