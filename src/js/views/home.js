import React from "react";
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
