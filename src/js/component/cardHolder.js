import React from "react";
import { CharacterCard } from "./card";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";

export class CharacterCardHolder extends React.Component {
	render() {
		return (
			<section className="container py-2 mb-5 vw-100">
				<h2 className="text-danger py-3">Characters</h2>
				<div className="row flex-row flex-nowrap overflow-auto">
					<Consumer>
						{({ store }) => {
							return store["characters"].map((character, i) => (
								<CharacterCard character={character} id={i + 1} key={i + 1} />
							));
						}}
					</Consumer>
				</div>
			</section>
		);
	}
}

CharacterCardHolder.propTypes = {
	title: PropTypes.string
};
