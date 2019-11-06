import React from "react";
import "../../styles/home.scss";
import { CharacterCardHolder } from "../component/cardHolder";
import { Consumer } from "../store/appContext";

export class Home extends React.Component {
	constructor() {
		super();
		this.actions = null;
	}

	async componentDidMount() {
		let url = "https://swapi.co/api/people";
		if (this.actions !== null) {
			await this.actions.loadCharacters(url);
		}
	}

	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					this.actions = actions;
					let data = store.characters;
					return <CharacterCardHolder data={data} />;
				}}
			</Consumer>
		);
	}
}
