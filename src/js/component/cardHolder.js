import React from "react";
import { Card } from "./card";
import PropTypes from "prop-types";

export class CardHolder extends React.Component {
	render() {
		return (
			<section className="container py-2 mb-5 vw-100">
				<h2 className="text-danger py-3">{this.props.title}</h2>
				<div className="row flex-row flex-nowrap overflow-auto">
					<Card type="characters" />
				</div>
			</section>
		);
	}
}

CardHolder.propTypes = {
	title: PropTypes.string
};
