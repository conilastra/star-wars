import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardHolder } from "../component/cardHolder";

export class Home extends React.Component {
	render() {
		return (
			<>
				<CardHolder title="Characters" />
				<CardHolder title="Planets" />
			</>
		);
	}
}
